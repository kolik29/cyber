import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconSmartWatches.module.sass';

export function IconSmartWatches() {
  return (
    <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
  );
}