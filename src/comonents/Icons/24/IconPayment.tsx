import styles from '../Icons.module.sass';
import stylesIcon from './IconPayment.module.sass';

export function IconPayment() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}