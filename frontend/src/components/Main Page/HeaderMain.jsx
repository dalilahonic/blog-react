import { useState } from 'react';
import styles from './HeaderMain.module.css';
import { Link } from 'react-router-dom';
import SliderButton from './SliderButton';

export default function HeaderMain() {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <div className={styles.main}>
      <nav>
        <div
          className={`${styles.leftNavigation} ${
            darkTheme ? styles.dark : styles.light
          }`}
        ></div>
        <div
          className={`${styles.rightNavigation} ${
            darkTheme ? styles.dark : styles.light
          }`}
        >
          <ul>
            <Link to='/writing'>
              <li>writing</li>
            </Link>
            <Link to='/speaking'>
              <li>speaking</li>
            </Link>
            <Link>
              <li>workshop</li>
            </Link>
            <Link>
              <li>playing</li>
            </Link>
            <SliderButton setDarkTheme={setDarkTheme} />
          </ul>
        </div>
      </nav>
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
    </div>
  );
}
