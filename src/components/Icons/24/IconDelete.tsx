import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconDelete.module.sass';

export function IconDelete() {
  return (
    <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}