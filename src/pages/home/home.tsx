import { useSessionStore } from '@/store';

export function HomePage() {
  const { username, profile } = useSessionStore();

  return (
    <div>
      Boilrplate Frontend -{username}
      <p>{profile}</p>
    </div>
  );
}
