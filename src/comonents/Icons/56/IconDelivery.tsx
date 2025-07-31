import styles from '../Icons.module.sass';
import stylesIcon from './IconDelivery.module.sass';

export function IconDelivery() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-48']} ${stylesIcon.icon}`}></i>
  );
}