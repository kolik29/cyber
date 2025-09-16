import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconGuaranteed.module.sass';

export function IconGuaranteed() {
  return (
    <i className={cn(styles.icon, styles['icon--size-56'], stylesIcon.icon)}></i>
  );
}