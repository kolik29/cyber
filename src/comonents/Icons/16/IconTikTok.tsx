import styles from '../Icons.module.sass';
import stylesIcon from './IconTikTok.module.sass';

export function IconTikTok() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-16']} ${stylesIcon.icon}`}></i>
  );
}