import styles from '../Icons.module.sass';
import stylesIcon from './IconCameras.module.sass';

export function IconCameras() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}