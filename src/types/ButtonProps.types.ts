import type { ButtonHTMLAttributes } from 'react';

export type ButtonStyle = 'white' | 'black' | 'blackStroke';
export type ButtonSize  = 'large' | 'medium' | 'small';

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  type?: ButtonStyle;
  size?: ButtonSize;
  submit?: boolean;
};
