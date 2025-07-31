import styles from '../Icons.module.sass';
import stylesIcon from './IconClose.module.sass';

export function IconClose() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}