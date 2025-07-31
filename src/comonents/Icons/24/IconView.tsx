import styles from '../Icons.module.sass';
import stylesIcon from './IconView.module.sass';

export function IconView() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}