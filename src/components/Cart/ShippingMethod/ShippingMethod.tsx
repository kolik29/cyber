import type { ShippingMethodProps } from '../../../types/ShippingMethodProps';
import { Radiobox } from '../../Inputs/Radiobox/Radiobox';
import styles from './ShippingMethod.module.sass';

export const ShippingMethod = ({
  id,
  value,
  name,
  title,
  price,
  date,
  selected = false,
  onChange,
}: ShippingMethodProps) => {
  return (
    <div className={styles.shippingMethod}  onClick={() => onChange(value)}>
      <Radiobox
        id={id}
        value={value}
        name={name}
        selected={selected}
        onChange={onChange}
      >
        <span className={styles.price}>{price}</span>
      </Radiobox>

      <div className={styles.info}>
        <div>{title}</div>
        <div>{date}</div>
      </div>
    </div>
  );
};
