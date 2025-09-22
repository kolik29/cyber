import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconPlus.module.sass';

export function IconPlus() {
  return (
    <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}