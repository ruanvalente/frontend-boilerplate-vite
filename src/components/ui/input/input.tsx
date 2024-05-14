import { InputHTMLAttributes } from 'react';

type InputProps = {
  label?: string;
  icon?: string;
  showIcon?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({
  label,
  icon = 'pi pi-calendar',
  showIcon = false,
  ...props
}: InputProps) {
  return (
    <>
      <label className="mt-4 flex text-gray-500" htmlFor={props.name}>
        {label}
      </label>
      <div className="relative">
        {showIcon && <i className={`${icon} absolute left-3 top-3`}></i>}
        <input
          {...props}
          className="placeholder:no mt-2 block w-full border-b-2 border-b-orange-300 bg-orange-50 p-2.5 text-sm text-gray-900 transition-all duration-500 focus:border-black focus:outline-none focus:ring-orange-300"
        />
      </div>
    </>
  );
}
