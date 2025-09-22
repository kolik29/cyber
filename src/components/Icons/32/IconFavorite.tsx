import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconFavorite.module.sass';
import type { MainProps } from '../../../types/MainProps.types';

export function IconFavorite({ className = '' }: MainProps) {
  return (
    <i className={cn(styles.icon, styles['icon--size-32'], stylesIcon.icon, className)}></i>
  );
}