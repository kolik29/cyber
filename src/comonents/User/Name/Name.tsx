import styles from './Name.module.sass';

export const Name = ({ name }: { name: string }) => {
  return (
    <div className={styles.name}>{name}</div>
  );
};