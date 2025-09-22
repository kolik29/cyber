import styles from './Avatar.module.sass';

export const Avatar = ({ src }: { src: string }) => {
  return (
    <div className={styles.avatar}>
      <img src={ src } alt="" />
    </div>
  );
};