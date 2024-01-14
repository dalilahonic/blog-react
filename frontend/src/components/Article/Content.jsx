import { useSelector } from 'react-redux';
import styles from './Content.module.css';
import { useParams } from 'react-router';

export default function Content() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  const data = useSelector((state) => state.posts);

  const { articleId } = useParams();

  const target = data?.find(
    (el) =>
      el.attributes.heading
        .toLowerCase()
        .split(' ')
        .join('-') === articleId
  );

  let article = target?.attributes || [];

  return (
    <section>
      <div
        className={`${styles.content} ${
          darkTheme ? styles.dark : styles.light
        }`}
      >
        <p>{article.content}</p>
      </div>
    </section>
  );
}
