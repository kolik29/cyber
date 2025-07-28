import styles from '../Icons.module.sass';
import stylesIconCart from './IconCart.module.sass';

export function IconCart() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-32']} ${stylesIconCart.iconCart}`}></i>
  );
}