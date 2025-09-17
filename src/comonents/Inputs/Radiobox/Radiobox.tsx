import styles from './Radiobox.module.sass';

export const Radiobox = ({ value, name, onChange, children }: { value: string, name: string, onChange: (value: string) => void, children: React.ReactNode }) => {
  const id = `${name}-${value}`;

  return (
    <div className={ styles.container }>
      <input type="radio" id={ id } value={ value } name={ name } onChange={ () => onChange(value) } hidden />
      <label htmlFor={ id } className={ styles.radiobox }></label>
      <label htmlFor={ id }>
        { children }
      </label>
    </div>
  );
};