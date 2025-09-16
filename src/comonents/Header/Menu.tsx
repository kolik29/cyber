import type { MainProps } from '../../types/MainProps.types';
import styles from './Menu.module.sass';
import cn from 'classnames';

export function Menu({ className = '' }: MainProps) {
  return (
    <menu className={cn(className, styles.menu)}>
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">About</a>
      </li>
      <li>
        <a href="">Contact Us</a>
      </li>
      <li>
        <a href="">Blog</a>
      </li>
    </menu>
  );
}