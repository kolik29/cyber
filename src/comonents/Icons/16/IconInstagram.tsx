import styles from '../Icons.module.sass';
import stylesIcon from './IconInstagram.module.sass';

export function IconInstagram() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-16']} ${stylesIcon.icon}`}></i>
  );
}