import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconArrowRight.module.sass';

export function IconArrowRight() {
  return (
    <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}