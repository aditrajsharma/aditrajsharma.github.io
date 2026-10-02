import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';
import { StructureFlowCollection } from '@designcodeio/threeui';
import '@designcodeio/threeui/style.css';

export function Scene() {
  useEffect(() => {
    // Forward pointer positions to the authored canvas listener without letting
    // the background intercept links, buttons, scrolling, or text selection.
    const forwardPointer = (event: PointerEvent) => {
      const canvas = document.querySelector('#dot-matrix-root canvas');
      if (!canvas || event.target === canvas) return;
      canvas.dispatchEvent(new PointerEvent('pointermove', {
        clientX: event.clientX, clientY: event.clientY,
        pointerType: event.pointerType, bubbles: false,
      }));
    };
    document.addEventListener('pointermove', forwardPointer, { passive: true });
    return () => document.removeEventListener('pointermove', forwardPointer);
  }, []);
  return (
    <div className="shader-frame">
      <StructureFlowCollection
        variant="dot-matrix"
        speed={1.00}
        gridScale={60}
        mouseAmount={0.040}
        pulseSpeed={0.40}
        hue={0}
        radius={0.150}
        opacity={0.35}
      />
    </div>
  );
}

const mount = document.getElementById('dot-matrix-root');
if (mount) createRoot(mount).render(<Scene />);
