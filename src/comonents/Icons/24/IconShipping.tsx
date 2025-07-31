import styles from '../Icons.module.sass';
import stylesIcon from './IconShipping.module.sass';

export function IconShipping() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}