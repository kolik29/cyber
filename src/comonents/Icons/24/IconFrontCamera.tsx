import styles from '../Icons.module.sass';
import stylesIcon from './IconFrontCamera.module.sass';

export function IconFrontCamera() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}