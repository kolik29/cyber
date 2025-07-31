import styles from '../Icons.module.sass';
import stylesIcon from './IconMainCamera.module.sass';

export function IconMainCamera() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}