import { Input } from '@/components/ui/input';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { ChangeEvent, useState } from 'react';

type InputSearch = {
  uf: string;
  name: string;
  search: string;
};

export function TabBlock() {
  const [inputValues, setInputValues] = useState<InputSearch>({
    uf: '',
    name: '',
    search: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const isFormValid = Object.values(inputValues).every(
    (value) => value.trim() !== ''
  );

  return (
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          molestias unde odio eaque sint excepturi aspernatur officiis, facilis
          error vel illum accusamus culpa accusantium repellat, corrupti
          deleniti mollitia magni aliquid.
        </p>
      </div>
      <div>
        <Input
          id="uf"
          name="uf"
          type="text"
          placeholder="Pesquisa"
          value={inputValues.uf}
          onChange={handleInputChange}
        />
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Pesquisa 2"
          value={inputValues.name}
          onChange={handleInputChange}
        />
        <Input
          id="search"
          name="search"
          type="text"
          placeholder="Pesquisa 3"
          value={inputValues.search}
          onChange={handleInputChange}
        />
      </div>
      {JSON.stringify(inputValues, null, 2)}
      <div className="mt-12 flex items-center justify-end gap-12">
        <Button
          label="Descartar"
          link
          className="border border-b-orange-400 p-0 text-orange-400"
        />
        <Button
          disabled={!isFormValid}
          label="Enviar"
          className="border-orange-300 bg-orange-400 px-4 py-2 disabled:border-none disabled:bg-gray-400"
        />
      </div>
    </div>
  );
}
