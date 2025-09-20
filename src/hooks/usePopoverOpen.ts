import { useCallback, useEffect, useRef, useState } from 'react';

export function usePopoverOpen() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen(o => !o), []);

  useEffect(() => {
    const onDocPointer = (e: PointerEvent) => {
      const n = e.target as Node;
      if (rootRef.current && !rootRef.current.contains(n)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('pointerdown', onDocPointer, { passive: true });
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('pointerdown', onDocPointer);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  return { open, setOpen, toggle, close, rootRef };
}
