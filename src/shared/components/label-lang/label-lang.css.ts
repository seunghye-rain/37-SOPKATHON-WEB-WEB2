import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@/shared/styles/theme.css';

export const labelLangStyle = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.2rem 0.8rem',
    borderRadius: '2px',
    ...themeVars.fontStyles.body3_r_14,
  },

  variants: {
    color: {
      default: {
        backgroundColor: themeVars.color.black,
      },
      primary: {
        backgroundColor: themeVars.color.primary700,
      },
    },
  },

  defaultVariants: {
    color: 'default',
  },
});
