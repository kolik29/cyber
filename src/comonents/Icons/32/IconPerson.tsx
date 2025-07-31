import styles from '../Icons.module.sass';
import stylesIcon from './IconPerson.module.sass';

export function IconPerson() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-32']} ${stylesIcon.icon}`}></i>
  );
}