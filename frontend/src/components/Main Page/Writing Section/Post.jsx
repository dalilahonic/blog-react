import { Link, useNavigate } from 'react-router-dom';
import styles from './Post.module.css';
import { useSelector } from 'react-redux';
import DotsSvg from '../../../assets/dots.svg';
import getLink from '../../../utils/getLink';

export default function Post({
  title,
  tags,
  sourceBlogName,
  linkToArtcile,
  description,
}) {
  const navigate = useNavigate();
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  function handleClick() {
    if (tags) navigate(`/posts/${getLink(title)}`);
    else {
      window.location.href = linkToArtcile;
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
          <img src={DotsSvg} alt='Dots' />
        </span>
      </div>
      <div className={styles.postBody}>
        <Link>{title}</Link>
        <p>{description}...</p>
        <footer>
          <Link to={tags ? '/posts' : linkToArtcile}>
            {tags ? 'Blog' : sourceBlogName}
          </Link>
          <Link>Read post</Link>
        </footer>
      </div>
    </div>
  );
}
