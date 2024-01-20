import { Link, useNavigate } from 'react-router-dom';
import styles from './Post.module.css';
import { useSelector } from 'react-redux';
import DotsSvg from '../../../assets/dots.svg';
import getLink from '../../../utils/getLink';
import getDescription from '../../../utils/getDescription';

export default function Post({
  heading,
  content,
  tags,
  from,
  link,
}) {
  const navigate = useNavigate();
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  function handleClick() {
    if (tags) navigate(`/posts/${getLink(heading)}`);
    else {
      window.location.href = link;
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`${styles.post} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.divider}>
        <span>
          <img src={DotsSvg} alt='Dots'></img>
        </span>
      </div>
      <div className={styles.postBody}>
        <Link>{heading}</Link>
        <p>{getDescription(content)}...</p>
        <footer>
          <Link to={tags ? '/posts' : link}>
            {tags ? 'Blog' : from}
          </Link>
          <Link>Read post</Link>
        </footer>
      </div>
    </div>
  );
}
