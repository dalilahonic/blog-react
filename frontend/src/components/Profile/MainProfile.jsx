import { useSelector } from 'react-redux';
import styles from './MainProfile.module.css';
import { useParams } from 'react-router';
import OptionsSvg from './OptionsSvg';

export default function MainProfile() {
  const params = useParams().username;
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );
  const storiesCount = useSelector(
    (state) => state.readingList.storiesCount
  );
  const savedArticles = useSelector(
    (state) => state.readingList.readingList
  );

  return (
    <div
      className={`${styles.profileMain} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.username}>
        <h1>{params}</h1>
      </div>
      <div className={styles.profile}>
        <div className={styles.profileLeft}>
          <div className={styles.tabs}>
            <div className={styles.tab}>Home</div>
            <div className={styles.tab}>About</div>
          </div>
          <div className={styles.homeMain}>
            <div className={styles.readingList}>
              <div className={styles.readingListLeft}>
                <div className={styles.userImg}>
                  <img
                    alt='Dalilahonic'
                    src='https://miro.medium.com/v2/resize:fill:40:40/1*dmbNkD5D-u45r44go_cf0g.png'
                    width='20'
                    height='20'
                    loading='lazy'
                  />
                  <p>{params}</p>
                </div>
                <div className={styles.reading}>
                  <h3>Reading List</h3>
                  <p>
                    {storiesCount == 0
                      ? 'No stories'
                      : storiesCount + ' stories'}
                  </p>

                  <OptionsSvg />
                </div>
              </div>
              <div className={styles.articles}>
                <div>
                  {savedArticles[0] && (
                    <img
                      src={
                        'http://localhost:1337' +
                        savedArticles[0]?.image
                      }
                    />
                  )}
                </div>
                <div>
                  {savedArticles[1] && (
                    <img
                      src={
                        'http://localhost:1337' +
                        savedArticles[1]?.image
                      }
                    />
                  )}
                </div>
                <div>
                  {savedArticles[2] && (
                    <img
                      src={
                        'http://localhost:1337' +
                        savedArticles[2]?.image
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.profileRight}></div>
      </div>
    </div>
  );
}
