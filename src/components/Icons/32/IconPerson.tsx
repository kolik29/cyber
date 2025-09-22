import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconPerson.module.sass';

export function IconPerson() {
  return (
    <i className={cn(styles.icon, styles['icon--size-32'], stylesIcon.icon)}></i>
  );
}