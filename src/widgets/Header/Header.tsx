import styles from './Header.module.sass';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { Icons } from './Icons';
import { MobileMenu } from './MobileMenu';
import cn from 'classnames';
import { Search } from '../../components/Inputs/Search/Search';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className={cn(styles.header)}>
      <div className="container">
        <div className={cn(styles['header-inner'])}>
          <Link to="/"><Logo></Logo></Link>
          <Search className={styles.search}></Search>
          <Menu className={styles.menu}></Menu>
          <Icons className={styles.icons}></Icons>
          <MobileMenu className={styles.mobileMenu}></MobileMenu>
        </div>
      </div>
    </header>
  );
}
