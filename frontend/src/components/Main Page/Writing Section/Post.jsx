import { Link } from 'react-router-dom';
import styles from './Post.module.css';
import { useSelector } from 'react-redux';
import DotsSvg from '../../../assets/dots.svg';

export default function Post() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  return (
    <div
      className={`${styles.post} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.divider}>
        <span>
          <img src={DotsSvg}></img>
          <svg></svg>
        </span>
      </div>
      <div className={styles.postBody}>
        <Link to='/the-many-ways-to-change-an-svg-fill-on-hover'>
          The many ways to change an SVG fill on hover
        </Link>
        <p>
          How do you go about adding a colored hover effect
          to an icon if it’s not an inline SVG? Let’s dive
          into what’s possible with CSS and SVG filters.
        </p>
        <footer>
          <Link> CSS tricks</Link>
          <Link>Read post</Link>
        </footer>
      </div>
    </div>
  );
}
