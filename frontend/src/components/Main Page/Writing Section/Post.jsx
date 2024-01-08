import { Link } from 'react-router-dom';
import styles from './Post.module.css';
import { useSelector } from 'react-redux';
import DotsSvg from '../../../assets/dots.svg';
import { useState } from 'react';
// import Article from './Article';

export default function Post({ heading, content, tags }) {
  const [isArticleOpen, setIsArticleOpen] = useState(false);
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  function getLink(heading) {
    return heading.toLowerCase().split(' ').join('-');
  }

  function getDescription(content) {
    return content.split(' ').slice(0, 22).join(' ');
  }

  function openArticle() {
    setIsArticleOpen(true);
  }

  return !isArticleOpen ? (
    <div
      // onClick={openArticle}
      className={`${styles.post} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.divider}>
        <span>
          <img src={DotsSvg} alt='Dots'></img>
          <svg></svg>
        </span>
      </div>
      <div className={styles.postBody}>
        <Link to={`/posts/${getLink(heading)}`}>
          {heading}
        </Link>
        <p>{getDescription(content)}...</p>
        <footer>
          <Link>{tags[0]}</Link>
          <Link>Read post</Link>
        </footer>
      </div>
    </div>
  ) : // <Article heading={heading} content={content} />
  null;
}
