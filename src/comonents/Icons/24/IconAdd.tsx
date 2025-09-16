import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconAdd.module.sass';

export function IconAdd() {
  return (
    <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}