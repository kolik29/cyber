import { Link } from "react-router-dom";
import { IconCart } from "../../components/Icons/32/IconCart";
import { IconFavorite } from "../../components/Icons/32/IconFavorite";
import { IconPerson } from "../../components/Icons/32/IconPerson";
import type { MainProps } from "../../types/MainProps.types";
import styles from './Icons.module.sass';
import cn from 'classnames';

export function Icons({ className = '' }: MainProps) {
  return (
    <>
      <div className={cn(className, styles.icons)}>
        <Link to=""><IconFavorite></IconFavorite></Link>
        <Link to=""><IconCart></IconCart></Link>
        <Link to=""><IconPerson></IconPerson></Link>
      </div>
    </>
  );
}