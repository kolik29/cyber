import styles from '../Icons.module.sass';
import stylesIcon from './IconCart.module.sass';

export function IconCart() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-32']} ${stylesIcon.icon}`}></i>
  );
}