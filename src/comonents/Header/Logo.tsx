import styles from './Logo.module.sass';
import LogoBlack from '../../assets/Logo/LogoBlack.svg';
import LogoWhite from '../../assets/Logo/LogoWhite.svg';
import type { LogoProps } from '../../types/Logo.types';
import cn from 'classnames';

export function Logo({ variant = 'black' }: LogoProps) {
  const src = variant === 'white' ? LogoWhite : LogoBlack;
  
  return (
    <div className={cn(styles.logo)}>
      <img src={src} alt="logo" />
    </div>
  );
}