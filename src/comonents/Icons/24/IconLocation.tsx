import styles from '../Icons.module.sass';
import stylesIcon from './IconLocation.module.sass';

export function IconLocation() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}