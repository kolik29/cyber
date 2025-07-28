import styles from '../Icons.module.sass';
import stylesIconPerson from './IconPerson.module.sass';

export function IconPerson() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-32']} ${stylesIconPerson.iconPerson}`}></i>
  );
}