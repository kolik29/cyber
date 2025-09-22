import type { DetailRatingProps } from '../../../types/DetailRatingProps.types';
import styles from './DetailRating.module.sass';
import cn from 'classnames';

export const DetailRating = ({ star1, star2, star3, star4, star5 }: DetailRatingProps) => {
  const buckets = [
    { label: 'Excellent', value: star5, color: '#4caf50' },
    { label: 'Very good', value: star4, color: '#8bc34a' },
    { label: 'Good',      value: star3, color: '#ffc107' },
    { label: 'Fair',      value: star2, color: '#ff9800' },
    { label: 'Bad',       value: star1, color: '#f44336' },
  ];

  const total = buckets.reduce((acc, { value }) => acc + value, 0);

  return (
    <div className={styles.detailRating}>
      {buckets.map(({ label: lbl, value, color }) => {
        const label = lbl;
        const percent = total > 0 ? (value / total) * 100 : 0;

        return (
          <>
            <span className={styles.detailRating__label}>{label}</span>

            <div className={styles.detailRating__track}>
              <div
                className={cn(
                  styles.detailRating__fill,
                  styles[`detailRating__fill--${label.replace(/\s+/g, '').toLowerCase()}`]
                )}
                style={{
                  width: `${percent}%`,
                  backgroundColor: color,
                }}
              />
            </div>

            <span className={styles.detailRating__count}>{value}</span>
          </>
        );
      })}
    </div>
  );
};
