import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconPayment.module.sass';

export function IconPayment() {
  return (
    <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}