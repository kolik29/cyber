import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconTwitter.module.sass';

export function IconTwitter() {
  return (
    <i className={cn(styles.icon, styles['icon--size-16'], stylesIcon.icon)}></i>
  );
}