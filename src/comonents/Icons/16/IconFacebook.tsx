import styles from '../Icons.module.sass';
import stylesIcon from './IconFacebook.module.sass';

export function IconFacebook() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-16']} ${stylesIcon.icon}`}></i>
  );
}