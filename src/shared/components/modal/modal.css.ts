import { keyframes, style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const scaleUp = keyframes({
  from: {
    opacity: 0,
    transform: 'scale(0.9)',
  },
  to: {
    opacity: 1,
    transform: 'scale(1)',
  },
});

export const wrapper = style({
  position: 'fixed',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: themeVars.zIndex.modal,
  animation: `${fadeIn} 0.2s ease-out`,
});

export const backdrop = style({
  position: 'absolute',
  inset: 0,
  background: 'rgba(0,0,0,0.4)',
});

export const container = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: '1.2rem',
  height: '20rem',
  width: '32rem',
  borderRadius: '8px',
  background: themeVars.color.white,
  zIndex: 1,
  animation: `${scaleUp} 0.3s ease-out`,
});

export const content = style({
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

export const text = style({
  ...themeVars.fontStyles.body2_r_16,
  color: themeVars.color.black,
  textAlign: 'center',
});
