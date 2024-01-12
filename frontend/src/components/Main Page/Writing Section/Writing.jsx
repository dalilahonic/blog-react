import styles from './Writing.module.css';
import { useSelector } from 'react-redux';
import Post from './Post';
import VisitButton from './VisitButton';

export default function Writing() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );
  const data = useSelector((state) => state.posts)?.slice(
    0,
    3
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

          {data?.map((post, i) => {
            return (
              <Post
                key={i}
                heading={post.attributes?.heading}
                content={post.attributes?.content}
                tags={post.attributes?.tags?.tags}
              />
            );
          })}
          <VisitButton />
        </div>
      </div>
    </section>
  );
}
