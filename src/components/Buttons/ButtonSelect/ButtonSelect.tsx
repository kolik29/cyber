import { useId } from 'react';
import cn from 'classnames';
import styles from './ButtonSelect.module.sass';
import type { ButtonSelectProps } from '../../../types/SelectProps.types';
import { IconArrowDown } from '../../Icons/24/IconArrowDown';
import { Dropdown } from '../../Dropdown/Dropdown';
import { usePopoverOpen } from '../../../hooks/usePopoverOpen';
import { useControllableSelect } from '../../../hooks/useControllableSelect';

export const ButtonSelect = ({
  type = 'blackStroke',
  size = 'large',
  name,
  value,
  defaultValue = null,
  placeholder = 'Label',
  options,
  onChange
}: ButtonSelectProps) => {
  const { open, toggle, close, rootRef } = usePopoverOpen();
  const { currentValue, currentOption, pick } =
    useControllableSelect(options, value, defaultValue, onChange);

  const id = useId();
  const listId = `${id}-listbox`;

  return (
    <div ref={rootRef} className={styles.wrapper}>
      {name && <input type="hidden" name={name} value={currentValue ?? ''} />}

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        className={cn(styles.button, styles[`button--${type}`], styles[`button--${size}`], {
          [styles.open]: open
        })}
        onClick={() => toggle()}
      >
        <div className={styles.content}>
          <span className={styles.labelText}>{currentOption?.label ?? placeholder}</span>
          <div className={styles.chevron}><IconArrowDown /></div>
        </div>
      </button>

      {open && (
        <Dropdown
          id={listId}
          className={styles.dropdown}
          listClassName={styles.options}
          optionClassName={styles.option}
          selectedClassName={styles.selected}
          options={options}
          value={currentValue}
          onPick={(opt) => { pick(opt); close(); }}
        />
      )}
    </div>
  );
};
