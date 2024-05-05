import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MenuItem } from 'primereact/menuitem';
import { Tooltip } from 'primereact/tooltip';

import { Input } from '@/components/ui/input';
import { BreadCrumb } from '@/components/ui/breadcrumb';
import { TabMenuStyledWrapper } from '../styled';

type InputSearch = {
  uf: string;
  county: string;
  cell: string;
  'sector-census': string;
};

export function TabBlock() {
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
  const [inputValues, setInputValues] = useState<InputSearch>({
    uf: '',
    county: '',
    cell: '',
    'sector-census': ''
  });
  const [blockList, setBlockList] = useState([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmittedBlockList = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setBlockList(json);
      });
  };

  const isFormValid = Object.values(inputValues).every(
    (value) => value.trim() !== ''
  );

  const handleResetForm = () => {
    setInputValues({
      uf: '',
      county: '',
      cell: '',
      'sector-census': ''
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
          <TabMenu model={items} activeIndex={1} />
          <div className="py-4">
            <div className="flex w-full flex-col rounded-sm bg-orange-100 px-4 py-4">
              <Tooltip target=".target-information" />
              <i
                className="target-information pi pi-info-circle p-text-secondary p-overlay-badge mb-4 mt-4 cursor-pointer text-wrap font-semibold"
                data-pr-tooltip="lorem ipsum dolor sit amet, consectetur adip"
                data-pr-position="top"
                data-pr-at="left+1 center"
                data-pr-my="left left-1"
                style={{ cursor: 'pointer', fontSize: '2rem' }}
              ></i>
              <p className="text-balance font-semibold">
                Histórico de bloqueio
              </p>
              <p className="text-balance text-gray-700">
                Busque pela área desejada para ver o histórico da região
              </p>
            </div>
            <div>
              <Input
                id="uf"
                name="uf"
                type="text"
                placeholder="Filtrar por estado"
                value={inputValues.uf}
                onChange={handleInputChange}
                label="UF"
              />
              <Input
                id="county"
                name="county"
                type="text"
                placeholder="Filtrar por município"
                value={inputValues.county}
                onChange={handleInputChange}
                label="Município"
              />
              <Input
                id="sector-census"
                name="sector-census"
                type="text"
                placeholder="Filtrar por setor censitário"
                value={inputValues['sector-census']}
                onChange={handleInputChange}
                label="Setor Censitário"
              />
              <Input
                id="cell"
                name="cell"
                type="text"
                placeholder="Filtrar por célula"
                value={inputValues.cell}
                onChange={handleInputChange}
                label="Célula"
              />
            </div>
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
                onClick={handleSubmittedBlockList}
              />
            </div>
          </div>
        </TabMenuStyledWrapper>
      </div>
      {blockList.length >= 1 && (
        <div className="mt-8">
          <div className="bg-white px-8 py-8 shadow">
            <h2 className="text-2xl font-bold">Bloqueios ativos</h2>
            <div className="mb-4 flex justify-end">
              <Button
                style={{ background: '#222' }}
                label="Exportar"
                icon="pi pi-download"
                iconPos="right"
              />
            </div>
            <DataTable
              value={blockList}
              showGridlines
              paginator
              rows={10}
              rowsPerPageOptions={[5, 10, 25, 50]}
            >
              <Column field="userId" header="User ID" sortable></Column>
              <Column field="id" header="ID" sortable></Column>
              <Column field="title" header="Title" sortable></Column>
              <Column field="completed" header="Completed" sortable></Column>
            </DataTable>
          </div>
        </div>
      )}
    </div>
  );
}
