import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconLocation.module.sass';

export function IconLocation() {
  return (
    <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}