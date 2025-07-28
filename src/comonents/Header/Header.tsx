import styles from './Header.module.sass';
import { Search } from '../Inputs/Search/Search';

export function Header() {
    return (
        <header className={styles.header}>
            <Search></Search>
        </header>
    );
}
