import { useParams } from 'react-router';
import styles from './ReadingList.module.css';
import OptionsSvg from './OptionsSvg';

export default function ReadingList({
  title,
  list,
  count,
}) {
  const params = useParams().username;

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
          <h3>{title.split('_').join(' ')}</h3>
          <p>
            {count == 0 ? 'No stories' : count + ' stories'}
          </p>

          <OptionsSvg />
        </div>
      </div>
      <div className={styles.articles}>
        <div>
          {list[0] && (
            <img
              src={'http://localhost:1337' + list[0]?.image}
            />
          )}
        </div>
        <div>
          {list[1] && (
            <img
              src={'http://localhost:1337' + list[1]?.image}
            />
          )}
        </div>
        <div>
          {list[2] && (
            <img
              src={'http://localhost:1337' + list[2]?.image}
            />
          )}
        </div>
      </div>
    </div>
  );
}
