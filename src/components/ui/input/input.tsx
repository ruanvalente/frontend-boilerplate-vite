import { InputHTMLAttributes } from 'react';

type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, ...props }: InputProps) {
  return (
    <>
      <label className="mt-4 flex text-gray-500" htmlFor={props.name}>
        {label}
      </label>
      <input
        {...props}
        className="mt-2 block w-full   border-b-2 border-b-orange-400 bg-orange-50 p-2.5 text-sm text-gray-900 transition-all duration-500 focus:border-black focus:outline-none focus:ring-orange-500"
      />
    </>
  );
}
