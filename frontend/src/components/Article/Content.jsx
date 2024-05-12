import { useSelector } from 'react-redux';
import styles from './Content.module.css';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

export default function Content() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );
  const [article, setArticle] = useState([]);

  const { articleTitle } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/articles/${articleTitle}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        return res.json();
      })
      .then((data) => {
        setArticle(data.article);
      })
      .catch((err) => console.log(err));
  }, [articleTitle]);

  console.log(article);

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
