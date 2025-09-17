import type { TabProps } from '../../../types/TabsProps.types';
import cn from 'classnames';
import styles from './Tabs.module.sass';

export const Tabs = ({ tabs, type, onChange }: { tabs: TabProps[], type: string, onChange: (value: string) => void }) => {
  return (
    <>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <div key={tab.value} className={cn(styles.tab, tab.active === true ? '' : styles.disabled)}>
            <input type="radio" name={type} id={tab.value} value={tab.value} onChange={() => onChange(tab.value)} hidden />
            <label htmlFor={tab.value}>{tab.label}</label>
          </div>
        ))}
      </div>
    </>
  );
};