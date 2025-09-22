import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconCores.module.sass';

export function IconCores() {
  return (
    <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}