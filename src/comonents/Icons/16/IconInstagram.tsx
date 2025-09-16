import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconInstagram.module.sass';

export function IconInstagram() {
  return (
    <i className={cn(styles.icon, styles['icon--size-16'], stylesIcon.icon)}></i>
  );
}