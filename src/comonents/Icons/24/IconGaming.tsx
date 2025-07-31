import styles from '../Icons.module.sass';
import stylesIcon from './IconGaming.module.sass';

export function IconGaming() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}