import { Link } from 'react-router-dom';
import styles from './Writing.module.css';
import { useSelector } from 'react-redux';

export default function Writing() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
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
          <div className={styles.post}>
            <div className={styles.divider}>
              <span>
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 21'%3E%3Cg id='Layer_1' data-name='Layer 1'%3E%3Ccircle cx='10' cy='10' r='10' fill='%23404040'/%3E%3Ccircle cx='40' cy='10' r='10' fill='%23404040'/%3E%3Ccircle cx='70' cy='10' r='10' fill='%23404040'/%3E%3C/g%3E%3C/svg%3E%0A" />
              </span>
            </div>
            <div className={styles.postBody}>
              <Link to='#'>
                The many ways to change an SVG fill on hover
              </Link>
              <p>
                How do you go about adding a colored hover
                effect to an icon if it’s not an inline SVG?
                Let’s dive into what’s possible with CSS and
                SVG filters.
              </p>
              <footer>
                <Link> CSS tricks</Link>
                <Link>Read post</Link>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
