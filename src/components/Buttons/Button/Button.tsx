import type { ButtonProps } from '../../../types/ButtonProps.types';
import styles from './Button.module.sass';
import cn from 'classnames';

export function Button({
  type = 'blackStroke',
  size = 'large',
  submit,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={cn(styles.button, styles[`button--${type}`], styles[`button--${size}`], className)}
      {...rest}
    >
      <div>{children}</div>
    </button>
  );
}
