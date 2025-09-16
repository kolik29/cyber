import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconMainCamera.module.sass';

export function IconMainCamera() {
  return (
    <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}