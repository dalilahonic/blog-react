import { useSelector } from 'react-redux';
import styles from './SomeOfMyTalks.module.css';

export default function SomeOfMyTalks() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  return (
    <div
      className={`${styles.talks} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.talksHeading}>
        <h1>Here's some of my talks</h1>
      </div>
      <div className={styles.talksInner}>
        <div className={styles.tabs}>
          <div className={styles.tab}>
            <h3>Interactive web animations with SVG</h3>
            <p> Beyond nest Berlin</p>
          </div>
          <div className={styles.tab}>
            <h3>Limitation breeds creativity</h3>
            <p> Novi Pazar</p>
          </div>
          <div className={styles.tab}>
            <h3>Interactive web animations with SVG</h3>
            <p> Barcelona</p>
          </div>
        </div>
        <div className={styles.video}></div>
      </div>
    </div>
  );
}
