import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconDelivery.module.sass';

export function IconDelivery() {
  return (
    <i className={cn(styles.icon, styles['icon--size-56'], stylesIcon.icon)}></i>
  );
}