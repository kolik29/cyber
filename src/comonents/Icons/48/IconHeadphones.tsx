import styles from '../Icons.module.sass';
import stylesIcon from './IconHeadphones.module.sass';

export function IconHeadphones() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-48']} ${stylesIcon.icon}`}></i>
  );
}