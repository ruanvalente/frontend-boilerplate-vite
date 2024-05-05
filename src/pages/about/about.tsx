import { useListener } from '@/hooks/useListener';

export function AboutPage() {
  const myEvent = useListener<{ data: number }>('my-event');
  console.log('myEvent', myEvent);
  return (
    <div data-testid="about-page">
      AboutPage {JSON.stringify(myEvent, null, 2)}
    </div>
  );
}
