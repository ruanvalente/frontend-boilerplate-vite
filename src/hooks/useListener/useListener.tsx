import { useEffect, useState } from 'react';

type CustomEvent<T> = Event & { detail: T };

export function useListener<T>(eventType: string): T | null {
  const [eventData, setEventData] = useState<T | null>(null);

  useEffect(() => {
    const handleEvent = (event: CustomEvent<T>) => {
      if (event.type === eventType) {
        setEventData(event.detail);
      }
    };
    console.log('eventData', eventData);
    console.log('eventType', eventType);
    window.addEventListener(eventType, handleEvent);

    return () => {
      window.removeEventListener(eventType, handleEvent);
    };
  }, [eventData, eventType]);

  return eventData;
}
