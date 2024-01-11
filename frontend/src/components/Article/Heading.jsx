import { useSelector } from 'react-redux';
import styles from './Heading.module.css';
import { useParams } from 'react-router';
import intro from '../../assets/intro.svg';
import calendar from '../../assets/calendar.svg';
import time from '../../assets/time.svg';

export default function Heading() {
  const data = useSelector((state) => state.posts);
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );
  const { articleId } = useParams();
  const heading = articleId.split('-').join(' ');

  const target = data?.find(
    (el) => el.attributes.heading.toLowerCase() === heading
  );

  let article = target?.attributes || [];

  return (
    <div
      className={`${styles.header} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.header2}>
        <div className={styles.logoDiv}>
          <div className={styles.logoInner}>
            <div className={styles.logoHeading}>
              <h1>{article?.heading}</h1>
            </div>
            <div className={styles.logoSummary}>
              <div>
                <img src={intro}></img>
                {article?.tags?.tags?.map((tag, i) => {
                  return (
                    <p className={styles.tags} key={i}>
                      {tag}&nbsp;
                    </p>
                  );
                })}
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
