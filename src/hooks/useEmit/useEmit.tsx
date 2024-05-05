import { useEffect, useRef } from 'react';

export function useEmit() {
  const emitRef = useRef<(eventType: string, eventData: any) => void>();

  useEffect(() => {
    const emit = (eventType: string, eventData: any) => {
      const event = new CustomEvent<any>(eventType, { detail: eventData });
      window.dispatchEvent(event);
    };
    emitRef.current = emit;
  }, []);

  return emitRef.current || (() => {});
}
