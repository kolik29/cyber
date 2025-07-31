import styles from './Header.module.sass';
import { Search } from '../Inputs/Search/Search';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { Icons } from './Icons';
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles['header-inner']}>
          <a href="/"><Logo></Logo></a>
          <Search className={styles.search}></Search>
          <Menu className={styles.menu}></Menu>
          <Icons className={styles.icons}></Icons>
          <MobileMenu className={styles.mobileMenu}></MobileMenu>
        </div>
      </div>
    </header>
  );
}
