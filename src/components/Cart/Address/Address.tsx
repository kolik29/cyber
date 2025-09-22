import { useState } from 'react';
import { IconClose } from '../../Icons/24/IconClose';
import { IconEdit } from '../../Icons/24/IconEdit';
import { Radiobox } from '../../Inputs/Radiobox/Radiobox';
import { Modal } from '../../Modal/Modal';
import styles from './Address.module.sass';
import { Text } from '../../Inputs/Text/Text';
import { Button } from '../../Buttons/Button/Button';
import { ButtonSelect } from '../../Buttons/ButtonSelect/ButtonSelect';
import type { AddressProps } from '../../../types/AddressProps.types';

export const Address = (
  { name, label, addressLine1, addressLine2, state, city, phone }: AddressProps,
) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <label className={styles.address} htmlFor="address-1">
        <div className={styles.select}>
          <Radiobox id="address-1" value="1" name="address" onChange={() => {}}></Radiobox>
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{name} <span className={styles.label}>{label}</span></div>
          <div className={styles.lines}>{addressLine2}, {addressLine1}, {state}, {city}</div>
          <div className={styles.phone}>{phone}</div>
        </div>
        <div className={styles.actions}>
          <button className={styles.edit} onClick={() => setOpen(true)}>
            <IconEdit></IconEdit>
          </button>
          <button className={styles.delete}>
            <IconClose></IconClose>
          </button>
        </div>
      </label>

      <Modal open={open} onClose={() => setOpen(false)} title="Edit address">
        <form action="">
          <div className={ styles.modal }>
            <div className={ styles.name }>
              <Text placeholder="Name" name="name" label="Name" value={name}></Text>
              <div className={ styles.label }>
                <ButtonSelect
                  type="black"
                  placeholder="Home"
                  options={[
                    { value: 'home', label: 'Home' },
                    { value: 'work', label: 'Work' },
                    { value: 'other', label: 'Other' },
                  ]}
                  onChange={(v) => console.log(v)}
                  defaultValue={'home'}
                />
              </div>
            </div>
            <div className={ styles.locality }>
              <Text placeholder="State" name="state" label="State" value={state}></Text>
              <Text placeholder="City" name="city" label="City" value={city}></Text>
            </div>
            <Text placeholder="Address Line 1" name="addressLine1" label="Address Line 1" value={addressLine1}></Text>
            <Text placeholder="Address Line 2" name="addressLine2" label="Address Line 2" value={addressLine2}></Text>
            <Text placeholder="Phone" name="phone" label="Phone" value={phone}></Text>            
          </div>

          <div className="actions">
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="black" submit>Save</Button>
          </div>
        </form>
      </Modal>
    </>
  )
}