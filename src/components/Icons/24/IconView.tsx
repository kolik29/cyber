import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconView.module.sass';
import type { MainProps } from '../../../types/MainProps.types';

export function IconView({ className }: MainProps) {
  return (
    <i className={cn(className, styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}