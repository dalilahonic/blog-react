import { useSelector } from 'react-redux';
import styles from './Section.module.css';
import BlogPost from './BlogPost';

export default function Section() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );
  return (
    <div
      className={`${styles.section} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.sectionHeading}>
        <h1>From my blog</h1>
      </div>
      <div className={styles.blogPosts}>
        <BlogPost />
      </div>
    </div>
  );
}
