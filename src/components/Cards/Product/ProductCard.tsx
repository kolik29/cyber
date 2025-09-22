import styles from './ProductCard.module.sass';
import { Button } from '../../Buttons/Button/Button';
import { IconFavorite } from '../../Icons/32/IconFavorite';

export const ProductCard = (
  { id, img, title, price }:
  { id: number, img: string, title: string, price: number }
) => {

  return (
    <div className={styles.productCard}>
      <div className={styles['productCard-favorite']}>
        <IconFavorite></IconFavorite>
      </div>
      <div className={styles['productCard-image']}>
        <img src={ img } alt="" />
      </div>
      <div className={styles['productCard-title']}>
        {title}
      </div>
      <div className={styles['productCard-price']}>
        ${price}
      </div>
      <div className={styles['productCard-button']}>
        <Button type="black" size="medium">Buy Now</Button>
      </div>
    </div>
  );
}