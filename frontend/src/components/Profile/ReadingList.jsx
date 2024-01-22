import { useParams } from 'react-router';
import styles from './ReadingList.module.css';
import OptionsSvg from './OptionsSvg';
import { useSelector } from 'react-redux';

export default function ReadingList({ title, list }) {
  const params = useParams().username;

  const savedArticles = useSelector(
    (state) => state.readingList.readingList.list
  );

  return (
    <div className={styles.readingList}>
      <div className={styles.readingListLeft}>
        <div className={styles.userImg}>
          <img
            alt={params}
            src='https://miro.medium.com/v2/resize:fill:40:40/1*dmbNkD5D-u45r44go_cf0g.png'
            width='20'
            height='20'
            loading='lazy'
          />
          <p>{params}</p>
        </div>
        <div className={styles.reading}>
          <h3>{title}</h3>
          <p>
            {list.storiesCount == 0
              ? 'No stories'
              : list.storiesCount + ' stories'}
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
  );
}
