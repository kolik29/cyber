import type { CategoryCardProps } from "../../../types/CategoryCardProps.types";
import styles from "./CategoryCard.module.sass";

export function CategoryCard({ text = '', children }: CategoryCardProps) {
  return (
    <div className={styles.categoryCard}>
      {children}
      <span>{text}</span>
    </div>
  );
};