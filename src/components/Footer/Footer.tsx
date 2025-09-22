import { Link } from 'react-router-dom';
import { IconFacebook } from '../Icons/16/IconFacebook';
import { IconInstagram } from '../Icons/16/IconInstagram';
import { IconTikTok } from '../Icons/16/IconTikTok';
import { IconTwitter } from '../Icons/16/IconTwitter';
import styles from './Footer.module.sass';
import cn from 'classnames';
import { Logo } from '../../widgets/Header/Logo';

export function Footer() {
  return (
    <footer className={cn(styles.footer)}>
      <div className="container">
        <div className={cn(styles['footer-inner'])}>
          <div className={cn(styles['footer-column'], styles['footer-info'])}>
            <Link to="/">
              <Logo variant="white"></Logo>
            </Link>
            <p>
              We are a residential interior design firm located in Portland. Our boutique-studio offers more than
            </p>
          </div>
          <div className={cn(styles['footer-column'], styles['footer-menu'])}>
            <h3>Services</h3>
            <menu>
              <li>
                <Link to="">Bonus program</Link>
              </li>
              <li>
                <Link to="">Gift cards</Link>
              </li>
              <li>
                <Link to="">Credit and payment</Link>
              </li>
              <li>
                <Link to="">Service contracts</Link>
              </li>
              <li>
                <Link to="">Non-cash account</Link>
              </li>
              <li>
                <Link to="">Payment</Link>
              </li>
            </menu>
          </div>
          <div className={cn(styles['footer-column'], styles['footer-menu'])}>
            <h3>Services</h3>
            <menu>
              <li>
                <Link to="">Find an order</Link>
              </li>
              <li>
                <Link to="">Terms of delivery</Link>
              </li>
              <li>
                <Link to="">Exchange and return of goods</Link>
              </li>
              <li>
                <Link to="">Guarantee</Link>
              </li>
              <li>
                <Link to="">Frequently asked questions</Link>
              </li>
              <li>
                <Link to="">Terms of use of the site</Link>
              </li>
            </menu>
          </div>
          <div className={cn(styles['footer-column'])}>
            <div className={cn(styles['footer-social'])}>
              <Link to=""><IconTwitter></IconTwitter></Link>
              <Link to=""><IconFacebook></IconFacebook></Link>
              <Link to=""><IconInstagram></IconInstagram></Link>
              <Link to=""><IconTikTok></IconTikTok></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};