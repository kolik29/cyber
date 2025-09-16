import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconArrowDown.module.sass';

export function IconArrowDown() {
  return (
    <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}