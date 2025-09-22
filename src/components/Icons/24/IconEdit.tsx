import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconEdit.module.sass';

export function IconEdit() {
  return (
    <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}