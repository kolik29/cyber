import { useState } from 'react';
import { IconPlus } from '../../Icons/24/IconPlus';
import { Modal } from '../../Modal/Modal';
import styles from './AddNewAddress.module.sass';
import { Text } from '../../Inputs/Text/Text';
import { Button } from '../../Buttons/Button/Button';
import { ButtonSelect } from '../../Buttons/ButtonSelect/ButtonSelect';

export const AddNewAddress = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.container} onClick={() => setOpen(true)}>
        <div className={styles.adder}>
          <button className={styles.adder__btn} aria-label="Add address">
            <IconPlus></IconPlus>
          </button>
        </div>
        <p className={styles.adder__label}>Add New Address</p>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Add new address">
        <form action="">
          <div className={ styles.modal }>
            <div className={ styles.name }>
              <Text placeholder="Name" name="name" label="Name" value={''}></Text>
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
              <Text placeholder="State" name="state" label="State" value={''}></Text>
              <Text placeholder="City" name="city" label="City" value={''}></Text>
            </div>
            <Text placeholder="Address Line 1" name="addressLine1" label="Address Line 1" value={''}></Text>
            <Text placeholder="Address Line 2" name="addressLine2" label="Address Line 2" value={''}></Text>
            <Text placeholder="Phone" name="phone" label="Phone" value={''}></Text>            
          </div>

          <div className="actions">
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="black" submit>Save</Button>
          </div>
        </form>
      </Modal>
    </>
  );
};