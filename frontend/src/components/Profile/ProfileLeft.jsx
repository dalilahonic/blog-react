import { useSelector } from 'react-redux';
import styles from './ProfileLeft.module.css';
import ReadingList from './ReadingList';

export default function ProfileLeft() {
  const lists = useSelector((state) => state.readingList);
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  return (
    <div
      className={`${styles.profileLeft} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
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
  );
}
