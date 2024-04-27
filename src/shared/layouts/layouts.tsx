import { ReactNode, useState } from 'react';
import { ContentLayout } from './content';
import { Sidebar } from '@/components/ui/sidebar';
import { Header } from '@/components/ui/header';

type LayoutProps = {
  children: ReactNode;
};

export function Layouts({ children }: LayoutProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar toggleSidebar={toggleSidebar} expanded={expanded} />
        <ContentLayout>{children}</ContentLayout>
      </div>
    </main>
  );
}
