import { useEffect, useId, useRef } from 'react';
import cn from 'classnames';
import styles from './Select.module.sass';
import type { SelectProps } from '../../../types/SelectProps.types';
import { IconArrowDown } from '../../Icons/24/IconArrowDown';
import { Dropdown } from '../../Dropdown/Dropdown';
import { usePopoverOpen } from '../../../hooks/usePopoverOpen';
import { useControllableSelect } from '../../../hooks/useControllableSelect';
import { useFilter } from '../../../hooks/useFilter';

export const Select = ({
  name,
  label = '',
  placeholder = '',
  value,
  defaultValue = null,
  options,
  onChange,
  filterable = false,
  noResultsText = 'No results',
  filterFn,
}: SelectProps) => {
  const { open, toggle, close, rootRef } = usePopoverOpen();
  const { currentValue, currentOption, pick } =
    useControllableSelect(options, value, defaultValue, onChange);

  const { query, setQuery, filtered, reset } = useFilter(options, filterable, filterFn);
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useId();
  const listId = `${id}-listbox`;

  useEffect(() => {
    if (open && filterable) inputRef.current?.focus();
  }, [open, filterable]);

  return (
    <div ref={rootRef} className={styles.select}>
      {label && <label className={styles.label}>{label}</label>}

      <div
        className={cn(styles['select-inner'], { [styles.open]: open })}
        onClick={() => toggle()}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
      >
        {name && <input type="hidden" name={name} value={currentValue ?? ''} />}

        {filterable && open ? (
          <input
            ref={inputRef}
            className={cn(styles.value, styles.inputValue)}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <span className={cn(styles.value, { [styles.placeholder]: !currentOption })}>
            {currentOption?.label ?? placeholder}
          </span>
        )}

        <div className={styles.chevron}><IconArrowDown /></div>

        {open && (
          <Dropdown
            id={listId}
            className={styles.dropdown}
            listClassName={styles.options}
            optionClassName={styles.option}
            selectedClassName={styles.selected}
            options={filtered}
            value={currentValue}
            noResultsText={noResultsText}
            onPick={(opt) => { pick(opt); reset(); close(); }}
          />
        )}
      </div>
    </div>
  );
};
