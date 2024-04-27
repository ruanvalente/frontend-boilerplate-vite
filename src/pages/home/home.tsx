import { useSessionStore } from '@/store';
import { Button } from 'primereact/button';

export function HomePage() {
  const { username, profile } = useSessionStore();

  return (
    <div>
      Boilrplate Frontend -{username}
      <p>{profile}</p>
      <Button label="Opa" />
    </div>
  );
}
