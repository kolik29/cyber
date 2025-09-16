import type { MainProps } from '../../../types/MainProps.types';
import { IconSearch } from '../../Icons/24/IconSearch';
import styles from './Search.module.sass';
import cn from 'classnames';

export function Search({ className = '' }: MainProps) {
  return (
    <div className={cn(className, styles.search)}>
      <form action="">
        <IconSearch></IconSearch>
        <input type="text" placeholder="Search" />
      </form>
    </div>
  );
}