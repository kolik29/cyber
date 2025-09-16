import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconClose.module.sass';

export function IconClose() {
  return (
    <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}