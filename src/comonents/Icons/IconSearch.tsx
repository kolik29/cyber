import styles from './Icons.module.sass';
import stylesIconSearch from './IconSearch.module.sass';

export function IconSearch() {
    return (
        <i className={`${styles.icon} ${stylesIconSearch.iconSearch}`}></i>
    );
}