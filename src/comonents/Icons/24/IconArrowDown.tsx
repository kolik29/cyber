import styles from '../Icons.module.sass';
import stylesIcon from './IconArrowDown.module.sass';

export function IconArrowDown() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}