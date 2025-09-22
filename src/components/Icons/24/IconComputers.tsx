import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconComputers.module.sass';

export function IconComputers() {
  return (
    <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}