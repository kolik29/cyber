import styles from '../Icons.module.sass';
import stylesIcon from './IconHeadphones.module.sass';

export function IconHeadphones() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}