import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconHeadphones.module.sass';

export function IconHeadphones() {
  return (
    <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}