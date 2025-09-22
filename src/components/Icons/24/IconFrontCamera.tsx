import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconFrontCamera.module.sass';

export function IconFrontCamera() {
  return (
    <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}