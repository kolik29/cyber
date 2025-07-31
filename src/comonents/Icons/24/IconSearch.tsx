import styles from '../Icons.module.sass';
import stylesIcon from './IconSearch.module.sass';

export function IconSearch() {
    return (
        <i className={`${styles.icon} ${styles['icon--size-24']} ${stylesIcon.icon}`}></i>
    );
}