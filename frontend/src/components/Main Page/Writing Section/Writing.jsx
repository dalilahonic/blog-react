import styles from './Writing.module.css';
import { useSelector } from 'react-redux';
import Post from './Post';

export default function Writing() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  return (
    <section>
      <div
        className={`${styles.writing} ${
          darkTheme ? styles.dark : styles.light
        }`}
      >
        <div
          className={`${styles.posts} ${
            darkTheme ? styles.dark : styles.light
          }`}
        >
          <h1>Writing.</h1>
          <Post />
        </div>
      </div>
    </section>
  );
}
