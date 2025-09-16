import type { DetailCardProps } from "../../../types/DetailCardProps";
import styles from "./DetailCard.module.sass";

export function DetailCard({ label = '', value = '', children }: DetailCardProps) {
  return (
    <div className={styles.detailCard}>
      <span className={styles['detailCard-icon']}>
        {children}
      </span>
      <div>
        <div className={styles['detailCard-label']}>{label}</div>
        <div className={styles['detailCard-value']}>{value}</div>
      </div>
    </div>
  );
}