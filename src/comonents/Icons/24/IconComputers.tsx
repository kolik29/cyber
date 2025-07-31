import styles from '../Icons.module.sass';
import stylesIcon from './IconComputers.module.sass';

export function IconComputers() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}