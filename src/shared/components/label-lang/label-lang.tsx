import type { ReactNode } from 'react';

import { labelLangStyle } from './label-lang.css';

interface LabelLangProps {
  children: ReactNode;
  color?: 'default' | 'primary';
}

const LabelLang = ({ children, color }: LabelLangProps) => {
  return <div className={labelLangStyle({ color })}>{children}</div>;
};

export default LabelLang;
