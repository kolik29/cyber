import styles from '../Icons.module.sass';
import stylesIcon from './IconSmartWatches.module.sass';

export function IconSmartWatches() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-48']} ${stylesIcon.icon}`}></i>
  );
}