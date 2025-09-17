import styles from './RatingStars.module.sass';

export const RatingStars = ({ rating }: { rating: number }) => {
  const maxStars = 5;
  const stars = Array.from({ length: maxStars }, (_, index) => {
    const full = index + 1 <= rating;
    const partial = rating > index && rating < index + 1;

    let fillPercent = 0;

    if (full) {
      fillPercent = 100;
    } else if (partial) {
      fillPercent = (rating - index) * 100;
    }

    return (
      <div
        key={index}
        className={styles.star}
        style={{ ['--fill' as any]: `${fillPercent}%` }}
      />
    );
  })

  return (
    <div className={styles.stars}>
        {stars}
    </div>
  );
};