import { useSelector } from 'react-redux';
import styles from './Heading.module.css';
import { useParams } from 'react-router';
import intro from '../../assets/intro.svg';
import calendar from '../../assets/calendar.svg';
import time from '../../assets/time.svg';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

export default function Heading({ text, title, classN }) {
  const [article, setArticle] = useState({});

  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );
  const { articleTitle } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/articles/${articleTitle}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        return res.json();
      })
      .then((data) => setArticle(data.article))
      .catch((err) => console.log(err));
  }, [articleTitle]);

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
              <h1>{article?.title || title}</h1>
              {text == 'writing' && (
                <>
                  <p>
                    My blog is where I think out loud.
                    Expect <em>mainly</em> front-end
                    development, with a sprinkling of self
                    care and mental health.
                  </p>
                  <p>
                    I&apos;m trying to be less precious
                    about writing, so I&apos;ve started a
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
                  {article?.tags?.map((tag, i) => {
                    return (
                      <p className={styles.tags} key={i}>
                        {tag}&nbsp;
                      </p>
                    );
                  })}
                </div>
                <div>
                  <img src={calendar} />
                  <p>{article.date}</p>
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
