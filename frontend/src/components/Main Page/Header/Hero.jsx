import { useSelector } from 'react-redux';
import styles from './Hero.module.css';

export default function Hero() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );
  return (
    <div className={styles.mainContainer}>
      <div
        className={`${styles.leftContainer} ${
          darkTheme ? styles.dark : styles.light
        }`}
      ></div>
      <div
        className={`${styles.rightContainer} ${
          darkTheme ? styles.dark : styles.light
        }`}
      ></div>
    </div>
  );
}
