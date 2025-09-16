import { Logo } from '../Header/Logo';
import { IconFacebook } from '../Icons/16/IconFacebook';
import { IconInstagram } from '../Icons/16/IconInstagram';
import { IconTikTok } from '../Icons/16/IconTikTok';
import { IconTwitter } from '../Icons/16/IconTwitter';
import styles from './Footer.module.sass';
import cn from 'classnames';

export function Footer() {
  return (
    <footer className={cn(styles.footer)}>
      <div className="container">
        <div className={cn(styles['footer-inner'])}>
          <div className={cn(styles['footer-column'], styles['footer-info'])}>
            <a href="/">
              <Logo variant="white"></Logo>
            </a>
            <p>
              We are a residential interior design firm located in Portland. Our boutique-studio offers more than
            </p>
          </div>
          <div className={cn(styles['footer-column'], styles['footer-menu'])}>
            <h3>Services</h3>
            <menu>
              <li>
                <a href="">Bonus program</a>
              </li>
              <li>
                <a href="">Gift cards</a>
              </li>
              <li>
                <a href="">Credit and payment</a>
              </li>
              <li>
                <a href="">Service contracts</a>
              </li>
              <li>
                <a href="">Non-cash account</a>
              </li>
              <li>
                <a href="">Payment</a>
              </li>
            </menu>
          </div>
          <div className={cn(styles['footer-column'], styles['footer-menu'])}>
            <h3>Services</h3>
            <menu>
              <li>
                <a href="">Find an order</a>
              </li>
              <li>
                <a href="">Terms of delivery</a>
              </li>
              <li>
                <a href="">Exchange and return of goods</a>
              </li>
              <li>
                <a href="">Guarantee</a>
              </li>
              <li>
                <a href="">Frequently asked questions</a>
              </li>
              <li>
                <a href="">Terms of use of the site</a>
              </li>
            </menu>
          </div>
          <div className={cn(styles['footer-column'])}>
            <div className={cn(styles['footer-social'])}>
              <a href=""><IconTwitter></IconTwitter></a>
              <a href=""><IconFacebook></IconFacebook></a>
              <a href=""><IconInstagram></IconInstagram></a>
              <a href=""><IconTikTok></IconTikTok></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};