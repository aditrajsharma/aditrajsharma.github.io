# Editorial designer portfolio

Serve the project root with `npm start` (port 3000). Open the live website, not an isolated HTML file preview: the scene loads local JavaScript and CSS.

## Dot Matrix integration

- Source: https://threeui.com/source-code/dot-matrix.json
- The complete retrieved bundle is saved as `dot-matrix.json`.
- All three registered source files are saved at their original paths, byte-for-byte. `npm run build` verifies their full SHA-256 hashes before bundling.
- Runtime: React 18.3.1 and Three.js r128 (`three128` npm alias).
- `src/Scene.tsx` uses the requested `StructureFlowCollection` API and all seven configured values without changes.
- The source bundle provides `DotMatrixBackground`, rather than the package-wide `StructureFlowCollection` dispatcher. `src/threeui-local.tsx` is a minimal local adapter, aliased to `@designcodeio/threeui` by the build. It dispatches the dot-matrix variant to the unchanged registered component. This is not a copy of an unprovided package dispatcher.
- The CSS import loads the full original stylesheet from `src/shaders/threeui.css`, retaining its relative asset paths. The bundle declares no assets; Dot Matrix does not use the font declarations for unrelated components in the shared stylesheet.
- The scene is a fixed full-viewport background in both themes. A portfolio-level CSS override makes the component background transparent so the theme background shows through. The homepage features an eight-cover parallax gallery with original SVG concept posters and AI-generated artwork. A document pointer relay forwards positions to the original canvas handler, while pointer-events:none keeps page controls interactive. The registered component, shader, and stylesheet remain unchanged.

## Development

```sh
npm ci
npm run build
npm start
```

The compiled `assets/scene.js` is included for direct static hosting. Deploy the index, assets, and registered CSS at the same relative paths.

## Verification

With the server running:

```sh
npx playwright install --with-deps chromium
npm test
```

Browser verification checks actual WebGL uniform values, time progression, smoothed pointer drift, responsive canvas dimensions, overflow, theme toggle, project dialogs, and rendering after scrolling. Results and screenshots are in `verification/`.

Authored lifecycle behavior is intentionally preserved, including its visibility handling; no upstream source patches were made.

## Editorial redesign

- Homepage: full-screen editorial gallery, Syne display typography, Inter body text, chartreuse accents, light/dark themes.
- `/work/`: eight concept projects, pointer and keyboard-focus image previews, project detail dialogs.
- About and Contact open accessible native dialogs. Email is intentionally unset; configure `EMAIL` in `assets/portfolio.js`.
- Portfolio images are original mock concepts, not claimed client work. Three raster covers are AI-generated.
- Images and fonts are served locally with no runtime CDN dependencies.
- Header and name placeholders appear in `index.html` and `work/index.html`. Keep both documents in sync after changing shared markup.
- `npm test` runs the editorial layout and interaction checks.
