import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconShipping.module.sass';

export function IconShipping() {
  return (
    <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}