import styles from '../Icons.module.sass';
import stylesIcon from './IconArrowRight.module.sass';

export function IconArrowRight() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}