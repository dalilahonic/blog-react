import { useSelector } from 'react-redux';
import styles from './Heading.module.css';
import { useParams } from 'react-router';
import intro from '../../assets/intro.svg';
import calendar from '../../assets/calendar.svg';
import time from '../../assets/time.svg';
import { Link } from 'react-router-dom';

export default function Heading({
  text,
  title,
  description,
  classN,
}) {
  const data = useSelector((state) => state.posts);
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );
  const { articleId } = useParams();

  const target = data?.find(
    (el) =>
      el.attributes.heading
        .toLowerCase()
        .split(' ')
        .join('-') === articleId
  );

  let article = target?.attributes || [];

  return (
    <div
      className={`${styles.header} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.header2}>
        <div
          className={`${styles.logoDiv} ${styles[classN]}`}
        >
          <div className={styles.logoInner}>
            <div
              className={`${styles.logoHeading} ${styles[classN]}`}
            >
              <h1>{article?.heading || title}</h1>
              {text == 'writing' && (
                <>
                  <p>
                    My blog is where I think out loud.
                    Expect <em>mainly</em> front-end
                    development, with a sprinkling of self
                    care and mental health.
                  </p>
                  <p>
                    I'm trying to be less precious about
                    writing, so I've started a
                    <Link to='/tags/notes/'>
                      snippets and notes
                    </Link>
                    section over here, for smaller posts.
                  </p>
                </>
              )}
            </div>

            {!text && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
