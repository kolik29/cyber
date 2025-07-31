import styles from '../Icons.module.sass';
import stylesIcon from './IconAdd.module.sass';

export function IconAdd() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}