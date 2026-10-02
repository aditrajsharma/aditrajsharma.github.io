import { build } from 'esbuild';
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
const bundle = JSON.parse(readFileSync('dot-matrix.json', 'utf8'));
for (const file of bundle.files) {
  const actual = createHash('sha256').update(readFileSync(file.path)).digest('hex');
  if (actual !== file.sha256) throw new Error(`Registered source changed: ${file.path}`);
}
await build({
  entryPoints: ['src/Scene.tsx'], outfile: 'assets/scene.js', bundle: true,
  minify: true, format: 'iife', jsx: 'automatic',
  define: { 'process.env.NODE_ENV': '"production"' },
  alias: { '@designcodeio/threeui': resolve('src/threeui-local.tsx') },
  plugins: [{ name: 'registered-styles', setup(build) {
    // Serve the exact CSS at its registered path, retaining relative asset URLs.
    build.onResolve({ filter: /^@designcodeio\/threeui\/style\.css$/ }, () => ({ path: 'registered-styles', namespace: 'threeui-css' }));
    build.onLoad({ filter: /.*/, namespace: 'threeui-css' }, () => ({ contents: `const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = '/src/shaders/threeui.css'; document.head.appendChild(link);`, loader: 'js' }));
  }}],
});
console.log('Built scene; all three registered source hashes verified.');
