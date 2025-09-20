import type { TextProps } from '../../../types/TextProps.types';
import styles from './Text.module.sass';
import cn from 'classnames';

export function Text({ placeholder = '', label = '', name, value, children }: TextProps) {
  return (
    <div className={cn(styles.text)}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={cn(styles['text-inner'])}>
        <input type="text" placeholder={placeholder} name={name} value={value} />
        {children}
      </div>
    </div>
  );
}