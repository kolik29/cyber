import styles from "./PriceRange.module.sass";
import { Range, getTrackBackground } from "react-range";

const clamp = (n: number, lo: number, hi: number) => Math.min(Math.max(n, lo), hi);

export const PriceRange = ({
  min,
  max,
  values,
  onChange
}: {
  min: number;
  max: number;
  values: [number, number];
  onChange: (v: [number, number]) => void;
}) => {
  const [from, to] = values;

  const handleFromInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    if (Number.isNaN(v)) return;
    if (v !== from) onChange([v, to]);
  };

  const handleToInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    if (Number.isNaN(v)) return;
    if (v !== to) onChange([from, v]);
  };

  return (
    <div className={styles.priceRange}>
      <div className={ styles.inputs }>
        <label className={styles.inputBox}>
          <span className={styles.label}>From</span>
          <input
            type="number"
            min={ min }
            max={ max }
            value={ from }
            onChange={ handleFromInput }
            aria-label="From"
          />
        </label>
        <label className={styles.inputBox}>
          <span className={styles.label}>To</span>
          <input
            type="number"
            min={ min }
            max={ max }
            value={ to }
            onChange={ handleToInput }
            aria-label="To"
          />
        </label>
      </div>

      <Range
        min={min}
        max={max}
        values={values}
        onChange={(vals) => onChange([vals[0], vals[1]])}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{ height: 24, display: "flex", width: "100%" }}
          >
            <div
              ref={props.ref}
              className={styles.track}
              style={{
                background: getTrackBackground({
                  values,
                  colors: ["#ddd", "#333", "#ddd"],
                  min,
                  max,
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className={styles.thumb}
          />
        )}
      />
    </div>
  );
};
