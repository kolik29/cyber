import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconFacebook.module.sass';

export function IconFacebook() {
  return (
    <i className={cn(styles.icon, styles['icon--size-16'], stylesIcon.icon)}></i>
  );
}