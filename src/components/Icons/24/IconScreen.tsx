import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconScreen.module.sass';

export function IconScreen() {
  return (
    <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}