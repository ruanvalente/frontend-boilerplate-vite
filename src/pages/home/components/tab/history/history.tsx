import { BreadCrumb } from '@/components/ui/breadcrumb';
import { useEffect, useState } from 'react';
import {
  InputCalendar,
  MultiSelectStyled,
  TabMenuStyledWrapper
} from '../styled';
import { TabMenu } from 'primereact/tabmenu';
import { Link, useNavigate } from 'react-router-dom';
import { MenuItem } from 'primereact/menuitem';
import { Input } from '@/components/ui/input';
import { MultiSelectChangeEvent } from 'primereact/multiselect';
import { Nullable } from 'primereact/ts-helpers';
import { Button } from 'primereact/button';
import { DataTableStyled } from './styled';
import { Column } from 'primereact/column';
import { StatusEnum } from './types/history-type';

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
  const [historyList, setHistoryList] = useState([]);

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

  const translateStatus = (status: string): string => {
    switch (status) {
      case StatusEnum.SENDING:
        return 'Enviando';
      case StatusEnum.SENT:
        return 'Enviado';
      case StatusEnum.SENDING_FAILED:
        return 'Falha no envio';
      default:
        return 'Status desconhecido';
    }
  };

  useEffect(() => {
    fetch('https://mocki.io/v1/78fc4380-155c-47c5-895c-9655b9d183bd')
      .then((response) => response.json())
      .then((response) => {
        setHistoryList(response.content);
        console.log(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex min-h-svh w-full gap-10">
      <div className="h-screen w-2/4 bg-white px-4 py-9 ">
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
      <div className="h-screen w-full bg-white px-14">
        <div>
          <h2 className="mt-20 text-lg font-semibold leading-8 text-neutral-900 md:text-2xl">
            Histórico de solicitações
          </h2>
          <span className="mt-2 inline-block font-sans italic text-gray-500">
            Total de registros encontrados: 3943
          </span>
        </div>
        <div className="flex w-full items-center justify-end gap-7">
          <Button icon="pi pi-sort-alt" text className="text-slate-900" />
          <Button icon="pi pi-sliders-v" text className="text-slate-900" />
          <Button
            label="Exportar"
            icon="pi pi-download"
            iconPos="right"
            className="bg-slate-900 outline-orange-500 ring-black"
          />
        </div>
        <div className="h-screen overflow-auto ">
          <DataTableStyled
            className="mt-8"
            value={historyList}
            showGridlines
            paginator
            rows={5}
            stripedRows
            rowsPerPageOptions={[5, 10, 25, 50]}
          >
            <Column field="email" header="E-mail" sortable />
            <Column
              field="status"
              header="Status"
              sortable
              body={(body) => <span>{translateStatus(body.status)}</span>}
            />
            <Column field="tenant" header="Tenant" sortable />
            <Column field="blocked" header="Bloqueio" sortable />
            <Column field="unblocked" header="Desbloqueio" sortable />

            <Column field="created_at" header="Data e hora" sortable />
            <Column
              field="processed"
              header="Processados"
              sortable
              body={(body) => (
                <>
                  <span>{body.processed}</span>
                  <Link to={`history/${body.id}`}>
                    <i className="pi pi-external-link ml-4 inline-block font-bold" />
                  </Link>
                </>
              )}
            />
            <Column field="blockedNumber" header="Não processados" sortable />
            <Column field="name" header="Nome do arquivo" sortable />
          </DataTableStyled>
        </div>
      </div>
    </div>
  );
}
