import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { ReactNode } from 'react';

import { buttonStyle } from './Button.css';

type ButtonStyleProps = RecipeVariants<typeof buttonStyle>;

type ButtonProps = ButtonStyleProps & {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({
  children,
  disabled,
  onClick,
  type = 'button',
  color,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonStyle({ color })}
    >
      {children}
    </button>
  );
};

export default Button;
