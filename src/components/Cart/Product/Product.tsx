import { IconClose } from '../../Icons/24/IconClose';
import { Quantity } from '../../Quantity/Quantity';
import styles from './Product.module.sass';

export const Product = (
  { id,
    img,
    title,
    article,
    quantity,
    price
  }:
  { id: number,
    img: string,
    title: string,
    article: string,
    quantity: number,
    price: number
  }
) => {
  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <img src={img} alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.description}>
          <div className={styles.title}>{title}</div>
          <div className={styles.article}>#{article}</div>
        </div>
        <div className={styles.summary}>
          <div className={styles.quantity}>
            <Quantity value={quantity} onChange={() => {}}></Quantity>
          </div>
          <div className={styles.price}>
            ${price}
          </div>
          <div className={styles.delete}>
            <button>
              <IconClose></IconClose>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}