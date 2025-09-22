import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconTikTok.module.sass';

export function IconTikTok() {
  return (
    <i className={cn(styles.icon, styles['icon--size-16'], stylesIcon.icon)}></i>
  );
}