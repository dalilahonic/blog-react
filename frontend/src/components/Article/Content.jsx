import { useSelector } from 'react-redux';
import styles from './Content.module.css';
import { useParams } from 'react-router';
import {  useState } from 'react';
import useFetch from '../../utils/useFetch';

export default function Content() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );
  const [article, setArticle] = useState([]);

  const { articleTitle } = useParams();

  useFetch(
    `http://localhost:3000/articles/${articleTitle}`,
    setArticle
  );

  return (
    <section>
      <div
        className={`${styles.content} ${
          darkTheme ? styles.dark : styles.light
        }`}
      >
        <p>{article?.body}</p>
      </div>
    </section>
  );
}
