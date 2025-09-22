import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconCPU.module.sass';

export function IconCPU() {
  return (
    <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}