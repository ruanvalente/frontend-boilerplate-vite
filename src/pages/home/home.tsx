import { useState } from 'react';

import { TabMenu } from 'primereact/tabmenu';
import { TabBlock, TabHistory, TabNew } from './components/tab/';
import { BreadCrumb } from '@/components/ui/breadcrumb';
import { TabMenuStyledWrapper } from './components/tab/styled';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from 'primereact/menuitem';

export function HomePage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const navigation = useNavigate();

  const items: MenuItem[] = [
    {
      label: 'Novo',
      command: () => {
        navigation('/');
      }
    },
    {
      label: 'Bloqueios',
      command: () => {
        navigation('/block');
      }
    },
    {
      label: 'Históricos',
      command: () => {
        navigation('/history');
      }
    }
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
    <div className="grid h-full w-full grid-cols-2 gap-10">
      <div className="bg-white px-4 py-9">
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
    </div>
  );
}
