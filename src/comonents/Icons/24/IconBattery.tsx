import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconBattery.module.sass';

export function IconBattery() {
  return (
    <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}