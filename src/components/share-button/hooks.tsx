import { useEffect, useCallback } from 'react';

export function useOnClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent | FocusEvent) => void
) {
  const listener = useCallback(
    (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (!ref.current || !target) return;
      if (ref.current.contains(target)) return;
      handler(event);
    },
    [ref, handler]
  );

  const handleFocusout = useCallback(
    (event: FocusEvent) => {
      const target = event.relatedTarget as Node;
      if (!ref.current || !target) return;
      // Check if the new focus target is outside the ref element
      if (!ref.current.contains(target)) {
        handler(event);
      }
    },
    [ref, handler]
  );

  useEffect(() => {
    document.addEventListener('mousedown', listener, { capture: true });
    document.addEventListener('touchstart', listener, { capture: true });
    ref.current?.addEventListener('focusout', handleFocusout);

    return () => {
      document.removeEventListener('mousedown', listener, { capture: true });
      document.removeEventListener('touchstart', listener, { capture: true });
      ref.current?.removeEventListener('focusout', handleFocusout);
    };
  }, [listener, handleFocusout, ref]);
}
