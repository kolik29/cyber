import { IconSearch } from '../../Icons/24/IconSearch';
import styles from './Search.module.sass';

export function Search() {
  return (
    <div className={styles.search}>
      <form action="">
        <IconSearch></IconSearch>
        <input type="text" placeholder="Search" />
      </form>
    </div>
  );
}