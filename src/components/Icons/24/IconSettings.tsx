import styles from '../Icons.module.sass';
import cn from 'classnames';
import stylesIcon from './IconSettings.module.sass';

export function IconSettings() {
    return (
        <i className={cn(styles.icon, styles['icon--size-24'], stylesIcon.icon)}></i>
    );
}