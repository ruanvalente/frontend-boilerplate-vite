import { InputHTMLAttributes, useRef } from 'react';
import { InputStyledWrapper } from './styles';

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
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    console.log('handleIconClick');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <InputStyledWrapper>
      <label className="mt-4 flex text-gray-500" htmlFor={props.name}>
        {label}
      </label>
      <div className="relative">
        {showIcon && (
          <i
            onClick={handleIconClick}
            className={`cursor-pointer ${icon} absolute right-[11px] top-3`}
          />
        )}
        <input
          className="placeholder:no mt-2 block w-full border-b-2 border-b-orange-300 bg-orange-50 p-2.5 text-sm text-gray-900 transition-colors duration-300 focus:border-black focus:outline-none focus:ring-orange-300"
          ref={inputRef}
          {...props}
        />
      </div>
    </InputStyledWrapper>
  );
}
