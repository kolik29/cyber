import { useState } from 'react';
import type { MainProps } from '../../types/MainProps.types';
import styles from './MobileMenu.module.sass';
import cn from 'classnames';

export function MobileMenu({ className = '' }: MainProps) {
  const [active, setActive] = useState(false);

  const onToggle = () => {
    setActive(!active);
  };

  return (
    <div className={cn(className, styles['mobileMenu-wrapper'], { [styles.active]: active })} onClick={onToggle}>
      <div className={`${className} ${styles['mobileMenu-inner']}`}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};