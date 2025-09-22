import { RatingStars } from '../RatingStars/RatingStars';
import styles from './OverallRating.module.sass';

export const OverallRating = ({ rating, totalValues }: { rating: number, totalValues: number }) => {
  rating = Number(rating.toFixed(1));

  return (
    <div className={styles.overallRating}>
      <span className={styles.overallRating__value}>{rating}</span>
      <span className={styles.overallRating__totalValues}>of {totalValues} reviews</span>
      <RatingStars rating={rating}></RatingStars>
    </div>
  );
};