import styles from './HeaderMain.module.css';
import Navigation from './Navigation';
import Hero from './Hero';

export default function HeaderMain() {
  return (
    <div className={styles.main}>
      <Navigation classN='home' />
      <Hero />
    </div>
  );
}
