import { useState } from 'react';

import { MenuItem } from 'primereact/menuitem';
import { TabMenu } from 'primereact/tabmenu';
import { TabBlock, TabHistory, TabNew } from './components/tab/';
import { BreadCrumb } from '@/components/ui/breadcrumb';
import { TabMenuStyledWrapper } from './components/tab/styled';

export function HomePage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const items: MenuItem[] = [
    { label: 'Novo' },
    { label: 'Bloqueios' },
    { label: 'Históricos' }
  ];

  const renderActiveView = (activeIndex: number) => {
    switch (activeIndex) {
      case 0:
        return <TabNew />;
      case 1:
        return <TabBlock />;
      case 2:
        return <TabHistory />;
      default:
        return null;
    }
  };
  return (
    <div className="h-full w-full bg-white px-4 py-9 md:w-2/4">
      <BreadCrumb />
      <div className="mb-4 mt-8">
        <h2 className="text-2xl font-bold">Qualificação de Viabilidade</h2>
      </div>
      <TabMenuStyledWrapper>
        <TabMenu
          model={items}
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
        />
        {renderActiveView(activeIndex)}
      </TabMenuStyledWrapper>
    </div>
  );
}
