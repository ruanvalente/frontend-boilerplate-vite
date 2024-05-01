import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';

export function TabNew() {
  return (
    <div className="py-9">
      <div className="flex items-center justify-between gap-2 px-4">
        <p className="text-gray-500">
          Enviar aquivo para solicitação <br />
          de bloqueio ou desbloqueio
        </p>
        <>
          <Tooltip target=".custom-target-icon" />

          <i
            className="custom-target-icon pi pi-info-circle p-text-secondary p-overlay-badge cursor-pointer font-semibold"
            data-pr-tooltip="Mensagem"
            data-pr-position="right"
            data-pr-at="right+5 top"
            data-pr-my="left center-2"
            style={{ cursor: 'pointer' }}
          ></i>
        </>
      </div>
      <div className="relative">
        <input
          type="file"
          className="mt-4 block w-full  rounded-lg border-b-2 border-b-orange-400 bg-orange-50 p-2.5 text-sm text-gray-900 transition-all duration-500 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          placeholder="Selecionar arquivo"
          required
        />
        <i className="pi pi-upload absolute right-4 top-4 font-semibold"></i>
      </div>
      <div className="mt-4 flex justify-between">
        <p className="text-sm italic text-gray-500">Limite de upload: 5MB</p>
        <a
          href=""
          className="border border-l-0 border-r-0 border-t-0 border-b-black"
        >
          <span className="mr-2 text-sm font-semibold uppercase">
            Download do modelo
          </span>{' '}
          <i className="pi pi-download font-semibold"></i>
        </a>
      </div>
      <div className="mt-12 flex items-center justify-end gap-12">
        <Button
          label="Cancelar"
          link
          className="border border-b-orange-400 p-0 text-orange-400"
        />
        <Button
          label="Enviar"
          className="border-orange-300 bg-orange-400 px-4 py-2 disabled:border-none disabled:bg-gray-400"
        />
      </div>
    </div>
  );
}
