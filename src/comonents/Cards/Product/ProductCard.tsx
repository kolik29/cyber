import styles from './ProductCard.module.sass';
import img from '../../../assets/Images/iphone-14-pro.png';
import { Button } from '../../Buttons/Button/Button';
import { IconFavorite } from '../../Icons/32/IconFavorite';

export function ProductCard() {

  return (
    <div className={styles.productCard}>
      <div className={styles['productCard-favorite']}>
        <IconFavorite></IconFavorite>
      </div>
      <div className={styles['productCard-image']}>
        <img src={ img } alt="" />
      </div>
      <div className={styles['productCard-title']}>
        Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
      </div>
      <div className={styles['productCard-price']}>
        $1399
      </div>
      <div className={styles['productCard-button']}>
        <Button type="black" size="medium">Buy Now</Button>
      </div>
    </div>
  );
}