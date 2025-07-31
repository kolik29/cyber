import styles from '../Icons.module.sass';
import stylesIcon from './IconArrowLeft.module.sass';

export function IconArrowLeft() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-32']} ${stylesIcon.icon}`}></i>
  );
}