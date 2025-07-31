import styles from '../Icons.module.sass';
import stylesIcon from './IconBattery.module.sass';

export function IconBattery() {
  return (
    <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
  );
}