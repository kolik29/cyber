import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconGaming.module.sass';

export function IconGaming() {
  return (
    <i className={cn(styles.icon, styles['icon--size-48'], stylesIcon.icon)}></i>
  );
}