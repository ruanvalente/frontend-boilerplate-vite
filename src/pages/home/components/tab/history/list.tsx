import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataTableStyled } from './styled';
import { StatusEnum } from './types/history-type';

export function HistoryList() {
  const [historyList, setHistoryList] = useState([]);

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
    <div className="flex h-full w-full gap-10">
      <div className="h-full w-full bg-white px-14">
        <div>
          <h2 className="mt-20 text-lg font-semibold leading-8 text-neutral-900 md:text-2xl">
            <Link to={'.'} className="mr-4 inline-block">
              <i className="pi pi-arrow-left" />
            </Link>
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
        <div>
          <DataTableStyled
            className="mt-8"
            value={historyList}
            showGridlines
            paginator
            rows={5}
            stripedRows
            rowsPerPageOptions={[5, 10, 25, 50]}
            tableStyle={{ minWidth: '50rem' }}
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
