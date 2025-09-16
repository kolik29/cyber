import type { ButtonProps } from '../../../types/ButtonProps.types';
import styles from './Button.module.sass';
import cn from 'classnames';

export function Button({ type = 'blackStroke', size = 'large', children }: ButtonProps) {
  return (
    <button className={cn(styles.button, styles[`button--${type}`], styles[`button--${size}`])}>
      <div>{children}</div>
    </button>
  );
}