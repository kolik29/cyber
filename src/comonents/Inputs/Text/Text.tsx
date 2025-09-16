import type { TextProps } from '../../../types/TextProps.types';
import styles from './Text.module.sass';
import cn from 'classnames';

export function Text({ placeholder = '', label = '', children }: TextProps) {
  return (
    <div className={cn(styles.text)}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={cn(styles['text-inner'])}>
        <input type="text" placeholder={placeholder} />
        {children}
      </div>
    </div>
  );
}