import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.header__title}>news24</p>
      <p className={styles.header__sutitle}>новости со всего мира</p>
    </header>
  );
};