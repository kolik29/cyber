import { IconAdd } from '../Icons/24/IconAdd';
import { IconDelete } from '../Icons/24/IconDelete';
import styles from './Quantity.module.sass';

export const Quantity = ({
  value,
  onChange,
  min = 0,
  max = Infinity
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}) => {
  const changeBy = (delta: number) => {
    const next = Math.max(min, Math.min(max, value + delta));
    if (next !== value) onChange(next);
  };

  return (
    <div className={styles.quantity}>
      <button type="button" onClick={() => changeBy(-1)} aria-label="Decrease">
        <IconDelete></IconDelete>
      </button>
      <input type="number" value={value} onChange={(e) => changeBy(parseInt(e.target.value) - value)} />
      <button type="button" onClick={() => changeBy(1)} aria-label="Increase">
        <IconAdd></IconAdd>
      </button>
    </div>
  );
};
