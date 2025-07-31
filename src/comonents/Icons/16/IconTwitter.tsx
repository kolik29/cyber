import styles from '../Icons.module.sass';
import stylesIcon from './IconTwitter.module.sass';

export function IconTwitter() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-16']} ${stylesIcon.icon}`}></i>
  );
}