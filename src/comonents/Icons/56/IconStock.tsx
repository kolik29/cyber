import styles from '../Icons.module.sass';
import stylesIcon from './IconStock.module.sass';

export function IconStock() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-48']} ${stylesIcon.icon}`}></i>
  );
}