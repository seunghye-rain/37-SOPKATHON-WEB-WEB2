import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { ReactNode } from 'react';

import { labelLangStyle } from './label-lang.css';

type ColorBoxVariants = RecipeVariants<typeof labelLangStyle>;

type ColorBoxProps = ColorBoxVariants & {
  children: ReactNode;
};

const ColorBox = ({ children, color }: ColorBoxProps) => {
  return <div className={labelLangStyle({ color })}>{children}</div>;
};

export default ColorBox;
