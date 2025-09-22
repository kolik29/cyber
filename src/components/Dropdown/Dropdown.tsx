import cn from 'classnames';
import styles from './Dropdown.module.sass';
import type { DropdownProps } from '../../types/DropdownProps.types';

export function Dropdown({
  id,
  options,
  value = null,
  onPick,
  noResultsText = 'No results',
  className,
  listClassName,
  optionClassName,
  selectedClassName,
  stopPropagation = true,
}: DropdownProps) {
  const handleContainerClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (stopPropagation) e.stopPropagation();
  };

  return (
    <div
      className={cn(styles.dropdown, className)}
      onClick={handleContainerClick}
      role="listbox"
      aria-labelledby={id}
    >
      <ul className={cn(styles.options, listClassName)}>
        {options.length === 0 && (
          <li className={styles.noResults} aria-disabled="true">
            {noResultsText}
          </li>
        )}

        {options.map((opt) => {
          const selected = opt.value === value;
          return (
            <li
              key={opt.value}
              role="option"
              aria-selected={selected}
              className={cn(styles.option, optionClassName, {
                [cn(styles.selected, selectedClassName)]: selected,
              })}
              onClick={() => onPick(opt)}
            >
              {opt.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
