import type { MainProps } from "../../types/MainProps.types";
import { IconCart } from "../Icons/32/IconCart";
import { IconFavorite } from "../Icons/32/IconFavorite";
import { IconPerson } from "../Icons/32/IconPerson";
import styles from './Icons.module.sass';

export function Icons({ className = '' }: MainProps) {
  return (
    <>
      <div className={`${className} ${styles.icons}`}>
        <a href=""><IconFavorite></IconFavorite></a>
        <a href=""><IconCart></IconCart></a>
        <a href=""><IconPerson></IconPerson></a>
      </div>
    </>
  );
}