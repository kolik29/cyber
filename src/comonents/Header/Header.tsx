import styles from './Header.module.sass';
import { Search } from '../Inputs/Search/Search';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { Icons } from './Icons';

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles['header-inner']}>
          <Logo></Logo>
          <Search></Search>
          <Menu></Menu>
          <Icons></Icons>
        </div>
      </div>
    </header>
  );
}
