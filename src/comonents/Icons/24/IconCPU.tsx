import styles from '../Icons.module.sass';
import stylesIcon from './IconCPU.module.sass';

export function IconCPU() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}