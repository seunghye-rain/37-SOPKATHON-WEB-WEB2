import { recipe } from '@vanilla-extract/recipes';

export const buttonStyle = recipe({
  base: {
    border: 'none',
    borderRadius: '8px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'opacity 0.2s',
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },

  variants: {
    color: {
      primary: {
        backgroundColor: '#007AFF',
        color: 'white',
      },
      secondary: {
        backgroundColor: '#E5E5EA',
        color: 'black',
      },
      danger: {
        backgroundColor: '#FF3B30',
        color: 'white',
      },
    },
  },

  defaultVariants: {
    color: 'primary',
  },
});
