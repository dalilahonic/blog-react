import styles from './Article.module.css';
import intro from '../../../assets/intro.svg';
import calendar from '../../../assets/calendar.svg';
import time from '../../../assets/time.svg';

export default function Article() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.logoDiv}>
          <div className={styles.logoInner}>
            <div className={styles.logoHeading}>
              <h1>Creating my logo animation</h1>
            </div>
            <div className={styles.logoSummary}>
              <div>
                <img src={intro}></img>
                <p>code SVG</p>
              </div>
              <div>
                <img src={calendar} />
                <p>30th July 2019</p>
              </div>
              <div>
                <img src={time} />

                <p>19 minutes read</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
