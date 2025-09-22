import { Link } from 'react-router-dom';
import type { MainProps } from '../../types/MainProps.types';
import styles from './Menu.module.sass';
import cn from 'classnames';

export function Menu({ className = '' }: MainProps) {
  return (
    <menu className={cn(className, styles.menu)}>
      <li>
        <Link to="">Home</Link>
      </li>
      <li>
        <Link to="">About</Link>
      </li>
      <li>
        <Link to="">Contact Us</Link>
      </li>
      <li>
        <Link to="">Blog</Link>
      </li>
    </menu>
  );
}