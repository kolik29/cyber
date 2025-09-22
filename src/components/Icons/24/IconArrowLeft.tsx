import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconArrowLeft.module.sass';

export function IconArrowLeft() {
  return (
    <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}