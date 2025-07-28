import styles from '../Icons.module.sass';
import stylesIconFavorite from './IconFavorite.module.sass';

export function IconFavorite() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-32']} ${stylesIconFavorite.iconFavorite}`}></i>
  );
}