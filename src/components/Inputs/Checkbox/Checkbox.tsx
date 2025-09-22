import styles from './Checkbox.module.sass';

export const Checkbox = ({ value, name, onChange, children }: { value: string, name: string, onChange: (value: string) => void, children: React.ReactNode }) => {
  const id = `${name}-${value}`;

  return (
    <div className={ styles.container }>
      <input type="checkbox" id={ id } value={ value } name={ name } onChange={ () => onChange(value) } hidden />
      <label htmlFor={ id } className={ styles.checkbox }></label>
      <label htmlFor={ id }>
        { children }
      </label>
    </div>
  );
};