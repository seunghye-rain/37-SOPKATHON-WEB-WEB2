import type { ChangeEvent } from 'react';

interface InputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  className?: string;
}

const Input = ({
  value,
  onChange,
  type = 'text',
  placeholder,
  className,
  ...rest
}: InputProps) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
