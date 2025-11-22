import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { buttonStyle } from './button.css';

type ButtonStyleVariants = RecipeVariants<typeof buttonStyle>;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStyleVariants & {
    children: ReactNode;
  };

const Button = ({ children, size, selected, ...props }: ButtonProps) => {
  return (
    <button {...props} className={buttonStyle({ size, selected })}>
      {children}
    </button>
  );
};

export default Button;
