import { style } from '@vanilla-extract/css';
import { themeVars } from '@/shared/styles/theme.css';

export const infoContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '32px',
});

export const profileImage = style({
  width: '140px',
  height: '140px',
});

export const symbolImage = style({
  width: '195px',
  height: '195px',
});

export const basicInfo = style({
  display: 'flex',
  gap: '12px',
});

export const basicContainer = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
});

export const basicFont = style({
  ...themeVars.fontStyles.body3_r_14,
});

export const divider = style({
  width: 0,
  height: '16px',
  border: `1px solid ${themeVars.color.gray400}`,
});

export const infoFont = style({
  ...themeVars.fontStyles.body1_sb_16,
});

export const InfoContainer = style({
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
});

export const detailFont = style({
  ...themeVars.fontStyles.body2_r_16,
});

export const detailContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const cardContainer = style({
  padding: '0 42px',
});
