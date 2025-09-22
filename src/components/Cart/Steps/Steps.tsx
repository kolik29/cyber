import styles from './Steps.module.sass';

export const Steps = (
  { number, title, children }:
  { number: number, title: string, children: React.ReactNode }
) => {
  return (
    <div className={styles.steps}>
      <div className={styles.icon}>
        {children}
      </div>
      <div className={styles.info}>
        <div className={styles.number}>Step {number}</div>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  )
}