import styles from './MobileMenu.module.sass';
import cn from 'classnames';
import { useState } from 'react';
import type { MainProps } from '../../types/MainProps.types';
import { Search } from '../Inputs/Search/Search';
import { Menu } from '../Header/Menu';
import { Icons } from '../Header/Icons';

export function MobileMenu() {
  const active = useState(true);

  return (
    <div className={cn(styles['mobileMenu'], { [styles.active]: active })}>
      <div className={styles['mobileMenu-inner']}>
        <Search className={cn(styles.search)}></Search>
        <Menu></Menu>
        <Icons></Icons>
      </div>
    </div>
  );
}