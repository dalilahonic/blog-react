import { useSelector } from 'react-redux';
import styles from './MainProfile.module.css';
import { useParams } from 'react-router';
import ReadingList from './ReadingList';
import ProfileRight from './ProfileRight';

export default function MainProfile() {
  const params = useParams().username;
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );
  const lists = useSelector((state) => state.readingList);

  console.log(lists);

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
            {Object.entries(lists).map((list, i) => {
              return (
                <ReadingList
                  key={i}
                  title={list[0]}
                  list={list[1].list}
                  count={list[1].storiesCount}
                />
              );
            })}
          </div>
        </div>
        <ProfileRight />
      </div>
    </div>
  );
}
