import { BreadCrumb } from '@/components/ui/breadcrumb';
import { useState } from 'react';
import {
  InputCalendar,
  MultiSelectStyled,
  TabMenuStyledWrapper
} from '../styled';
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from 'primereact/menuitem';
import { Input } from '@/components/ui/input';
import { MultiSelectChangeEvent } from 'primereact/multiselect';
import { Nullable } from 'primereact/ts-helpers';
import { Button } from 'primereact/button';

type Status = {
  name: string;
  value: string;
};

interface InputSearch {
  selectStatus: Status | null;
  startDate: Nullable<Date>;
  endDate: Nullable<Date>;
  email: string;
  tenant: string;
}

export function TabHistory() {
  const navigation = useNavigate();
  const status: Status[] = [
    { name: 'Enviado', value: 'sent' },
    { name: 'Enviando', value: 'sending' },
    { name: 'Falha ao enviar', value: 'sending-failed' }
  ];
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

  const [inputValues, setInputValues] = useState<InputSearch>({
    selectStatus: null,
    startDate: null,
    endDate: null,
    email: '',
    tenant: ''
  });

  const handleInputChange = (
    name: keyof InputSearch,
    value: string | Status | null
  ) => {
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDateChange = (
    name: keyof InputSearch,
    date: Date | undefined
  ) => {
    setInputValues((prevState) => ({
      ...prevState,
      [name]: date || null
    }));
  };

  const isFormValid = Object.values(inputValues).some(
    (value) => value !== null && value !== ''
  );

  const handleResetForm = () => {
    setInputValues({
      selectStatus: null,
      startDate: null,
      endDate: null,
      email: '',
      tenant: ''
    });
  };

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
              <label className="mb-2 flex text-gray-500" htmlFor="start-date">
                Data ínicio
              </label>

              <div className="relative">
                <InputCalendar
                  dateFormat="dd/mm/yy"
                  value={inputValues.startDate}
                  readOnlyInput
                  onChange={(e) =>
                    handleDateChange('startDate', e.value as Date)
                  }
                />
                {!inputValues.startDate && (
                  <i className="pi pi-calendar absolute left-3 top-3" />
                )}
              </div>
              <label
                className="mb-2 mt-4 flex text-gray-500"
                htmlFor="end-date"
              >
                Data fim
              </label>
              <div className="relative">
                <InputCalendar
                  dateFormat="dd/mm/yy"
                  value={inputValues.endDate}
                  readOnlyInput
                  onChange={(e) => handleDateChange('endDate', e.value as Date)}
                />
                {!inputValues.endDate && (
                  <i className="pi pi-calendar absolute left-3 top-3" />
                )}
              </div>
              <Input
                label="E-mail"
                type="email"
                placeholder="E-mail"
                value={inputValues.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
              <Input
                label="Tenant"
                type="text"
                placeholder="Digite a tenant"
                value={inputValues.tenant}
                onChange={(e) => handleInputChange('tenant', e.target.value)}
              />
              <label className="mt-4 flex text-gray-500" htmlFor="status">
                Status
              </label>
              <MultiSelectStyled
                id="status"
                onChange={(e: MultiSelectChangeEvent) =>
                  setInputValues((prevState) => ({
                    ...prevState,
                    selectStatus: e.value
                  }))
                }
                value={inputValues.selectStatus}
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
                  onClick={handleResetForm}
                />
                <Button
                  disabled={!isFormValid}
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
      <div>{/* Tablelist */}</div>
    </div>
  );
}
