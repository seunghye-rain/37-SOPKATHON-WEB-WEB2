import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { ReactNode } from 'react';

import { buttonStyle } from './button.css';

type ButtonStyleProps = RecipeVariants<typeof buttonStyle>;

type ButtonProps = ButtonStyleProps & {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: string;
  selected?: boolean;
};

const Button = ({
  children,
  disabled,
  onClick,
  type = 'button',
  size,
  selected,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonStyle({ size, selected })}
    >
      {children}
    </button>
  );
};

export default Button;
