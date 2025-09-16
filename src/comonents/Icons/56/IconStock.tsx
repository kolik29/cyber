import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconStock.module.sass';

export function IconStock() {
  return (
    <i className={cn(styles.icon, styles['icon--size-56'], stylesIcon.icon)}></i>
  );
}