import { Link, useNavigate } from 'react-router-dom';
import styles from './Post.module.css';
import { useSelector } from 'react-redux';
import DotsSvg from '../../../assets/dots.svg';

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

  function getLink(heading) {
    return heading.toLowerCase().split(' ').join('-');
  }

  function getDescription(content) {
    return content.split(' ').slice(0, 22).join(' ');
  }

  function handleClick() {
    if (tags) navigate(`/posts/${getLink(heading)}`);
    else {
      window.location.href = link;
      console.log(link);
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
