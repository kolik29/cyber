import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconCameras.module.sass';

export function IconCameras() {
  return (
    <i className={cn(styles.icon, styles['icon--size-48'], stylesIcon.icon)}></i>
  );
}