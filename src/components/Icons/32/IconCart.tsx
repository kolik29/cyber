import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconCart.module.sass';

export function IconCart() {
  return (
    <i className={cn(styles.icon, styles['icon--size-32'], stylesIcon.icon)}></i>
  );
}