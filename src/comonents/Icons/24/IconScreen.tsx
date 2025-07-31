import styles from '../Icons.module.sass';
import stylesIcon from './IconScreen.module.sass';

export function IconScreen() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}