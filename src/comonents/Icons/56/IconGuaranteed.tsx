import styles from '../Icons.module.sass';
import stylesIcon from './IconGuaranteed.module.sass';

export function IconGuaranteed() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-48']} ${stylesIcon.icon}`}></i>
  );
}