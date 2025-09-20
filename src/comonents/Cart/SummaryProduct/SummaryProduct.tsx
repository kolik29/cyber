import styles from './SummaryProduct.module.sass';

export const SummaryProduct = (
  { id, img, title, price }:
  { id: number, img: string, title: string, price: number }
) => {
  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <img src={img} alt="" />
      </div>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.price}>
        ${price}
      </div>
    </div>
  );
};