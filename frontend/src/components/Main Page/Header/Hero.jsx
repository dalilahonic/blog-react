import { useSelector } from 'react-redux';
import styles from './Hero.module.css';
import compDark from '../../../assets/compDark.svg';
import compLight from '../../../assets/compLight.svg';

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
      >
        <img src={darkTheme ? compDark : compLight} />
      </div>
      <div
        className={`${styles.rightContainer} ${
          darkTheme ? styles.dark : styles.light
        }`}
      >
        <div className={styles.rightContent}>
          <p>👋 Hi, I'm Dalila</p>
          <p>
            I like making fun, interactive things with code.
            I also talk & write about those things.
          </p>
        </div>
      </div>
    </div>
  );
}
