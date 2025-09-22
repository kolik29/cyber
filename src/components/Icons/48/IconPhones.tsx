import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconPhones.module.sass';

export function IconPhones() {
  return (
    <i className={cn(styles.icon, styles['icon--size-48'], stylesIcon.icon)}></i>
  );
}