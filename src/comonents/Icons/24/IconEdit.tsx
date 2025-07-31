import styles from '../Icons.module.sass';
import stylesIcon from './IconEdit.module.sass';

export function IconEdit() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}