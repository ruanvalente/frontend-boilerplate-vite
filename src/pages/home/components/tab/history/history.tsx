import { BreadCrumb } from '@/components/ui/breadcrumb';
import { MultiSelectStyled, TabMenuStyledWrapper } from '../styled';
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from 'primereact/menuitem';
import { Input } from '@/components/ui/input';
import { MultiSelectChangeEvent } from 'primereact/multiselect';
import { useState } from 'react';
import { Button } from 'primereact/button';

type Status = {
  name: string;
  value: string;
};

export function TabHistory() {
  const [selectStatus, setSelectStatus] = useState<Status | null>(null);

  const status: Status[] = [
    { name: 'Enviado', value: 'sent' },
    { name: 'Enviando', value: 'sending' },
    { name: 'Falha ao enviar', value: 'sending-failed' }
  ];

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
          <form className="py-4">
            <div>
              <Input label="Data ínicio" type="date" />
              <Input label="Data fim" type="date" />
              <Input label="E-mail" type="email" placeholder="E-mail" />
              <Input
                label="Tenant"
                type="email"
                placeholder="Digite a tenant"
              />
              <label className="mt-4 flex text-gray-500" htmlFor="status">
                Status
              </label>
              <MultiSelectStyled
                id="status"
                onChange={(e: MultiSelectChangeEvent) =>
                  setSelectStatus(e.value)
                }
                value={selectStatus}
                options={status}
                display="chip"
                optionLabel="name"
                placeholder="Selecione..."
                maxSelectedLabels={3}
                className="md:w-20rem mt-2 w-full border-b-2 border-b-orange-300 bg-orange-50 p-[2px] text-sm text-gray-900 transition-all duration-500 focus:border-black focus:outline-none focus:ring-orange-300"
              />
              <div className="mt-12 flex items-center justify-end gap-12">
                <Button
                  label="Descartar"
                  link
                  className="border border-b-orange-400 p-0 text-orange-400"
                />
                <Button
                  label="Pesquisar"
                  className="border-orange-300 bg-orange-400 px-4 py-2 disabled:border-none disabled:bg-gray-400"
                  icon="pi pi-forward"
                  iconPos="right"
                />
              </div>
            </div>
          </form>
        </TabMenuStyledWrapper>
      </div>
      <div>asuhsahuas</div>
    </div>
  );
}
