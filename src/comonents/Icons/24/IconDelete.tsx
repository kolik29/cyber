import styles from '../Icons.module.sass';
import stylesIcon from './IconDelete.module.sass';

export function IconDelete() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}