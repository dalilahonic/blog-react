import { useSelector } from 'react-redux';
import styles from './BlogPost.module.css';
import { Link, useNavigate } from 'react-router-dom';

export default function BlogPost({
  heading,
  date,
  description,
  image,
  tags,
  from,
}) {
  const navigate = useNavigate();
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  function getLink(heading) {
    return heading.toLowerCase().split(' ').join('-');
  }

  return (
    <div
      onClick={() => navigate(`/posts/${getLink(heading)}`)}
      className={`${styles.blogCard} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.imageContainer}>
        <img src={`http://localhost:1337${image?.url}`} />
      </div>
      <div className={styles.infoContainer}>
        <div>
          <p>{date}</p>
          <h1>{heading}</h1>
          <p>{description}</p>
        </div>
        <div className={styles.links}>
          {from && <Link>{from}</Link>}
          <div>
            {!from &&
              tags?.map((tag, i) => {
                return (
                  <Link
                    key={i}
                    className={styles.tagLink}
                    onClick={(e) => {
                      navigate(`/tags/${tag}`);
                      e.stopPropagation();
                    }}
                  >
                    {tag} {i == tags.length - 1 ? '' : ' |'}{' '}
                  </Link>
                );
              })}
          </div>
          <Link>Read post </Link>
        </div>
      </div>
    </div>
  );
}
