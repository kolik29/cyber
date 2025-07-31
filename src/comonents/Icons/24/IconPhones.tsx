import styles from '../Icons.module.sass';
import stylesIcon from './IconPhones.module.sass';

export function IconPhones() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}