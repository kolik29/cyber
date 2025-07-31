import styles from '../Icons.module.sass';
import stylesIcon from './IconPlus.module.sass';

export function IconPlus() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}