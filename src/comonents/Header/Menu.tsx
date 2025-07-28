import styles from './Menu.module.sass';

export function Menu() {
  return (
    <menu className={styles.menu}>
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">About</a>
      </li>
      <li>
        <a href="">Contact Us</a>
      </li>
      <li>
        <a href="">Blog</a>
      </li>
    </menu>
  );
}