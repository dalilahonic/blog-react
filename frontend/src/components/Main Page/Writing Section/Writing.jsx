import styles from './Writing.module.css';
import { useSelector } from 'react-redux';
import Post from './Post';
import VisitButton from './VisitButton';
import { useState } from 'react';
import useFetch from '../../../utils/useFetch';

export default function Writing() {
  const [data, setData] = useState([]);
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  useFetch('http://localhost:3000/limitedArticles', setData);

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

          {data?.map((post) => {
            return (
              <Post
                key={post._id}
                title={post.title}
                tags={post.tags}
                from={post.sourceBlogName}
                link={post.linkToArticle}
                description={post.description}
              />
            );
          })}
          <VisitButton />
        </div>
      </div>
    </section>
  );
}
