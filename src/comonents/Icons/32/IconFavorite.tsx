import styles from '../Icons.module.sass';
import stylesIcon from './IconFavorite.module.sass';

export function IconFavorite() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-32']} ${stylesIcon.icon}`}></i>
  );
}