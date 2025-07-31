import type { MainProps } from '../../types/MainProps.types';
import styles from './MobileMenu.module.sass';

export function MobileMenu({ className = '' }: MainProps) {
  return (
    <div className={`${className} ${styles['mobileMenu-wrapper']}`}>
      <div className={`${className} ${styles['mobileMenu-inner']}`}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};