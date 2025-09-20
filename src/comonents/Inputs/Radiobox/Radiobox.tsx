import styles from './Radiobox.module.sass';

type RadioboxProps = {
  id?: string;
  value: string;
  name: string;
  selected?: boolean;
  onChange: (value: string) => void;
  children?: React.ReactNode;
};

export const Radiobox = ({
  id,
  value,
  name,
  selected = false,
  onChange,
  children,
}: RadioboxProps) => {
  const inputId = id ?? `${name}-${value}`;

  return (
    <div className={styles.container}>
      <input
        type="radio"
        id={inputId}
        name={name}
        value={value}
        checked={selected}
        onChange={() => onChange(value)}
        className={styles.input}
      />
      <label htmlFor={inputId} className={styles.radiobox} />
      <label htmlFor={inputId}>
        {children}
      </label>
    </div>
  );
};
