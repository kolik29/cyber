import styles from '../Icons.module.sass';
import stylesIcon from './IconSettings.module.sass';

export function IconSettings() {
    return (
        <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
    );
}