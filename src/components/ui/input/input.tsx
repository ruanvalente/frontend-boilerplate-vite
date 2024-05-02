import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className="mt-4 block w-full  rounded-lg border-b-2 border-b-orange-400 bg-orange-50 p-2.5 text-sm text-gray-900 transition-all duration-500 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
    />
  );
}
