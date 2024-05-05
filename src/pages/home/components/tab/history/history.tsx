import { BreadCrumb } from '@/components/ui/breadcrumb';
import { TabMenuStyledWrapper } from '../styled';
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from 'primereact/menuitem';

export function TabHistory() {
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

  return (
    <div className="grid h-full w-full grid-cols-2 gap-10">
      <div className="bg-white px-4 py-9">
        <BreadCrumb />
        <div className="mb-4 mt-8">
          <h2 className="text-2xl font-bold">Qualificação de Viabilidade</h2>
        </div>
        <TabMenuStyledWrapper>
          <TabMenu model={items} activeIndex={2} />
          <div className="py-4">TabHistory</div>
        </TabMenuStyledWrapper>
      </div>
      <div>asuhsahuas</div>
    </div>
  );
}
