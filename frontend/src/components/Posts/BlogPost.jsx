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

  let string = '';

  tags?.map((tag, i) => {
    if (i == tags.length - 1) {
      string += tag;
    } else {
      string += tag + ' | ';
    }
  });

  function getLink(heading) {
    return heading.toLowerCase().split(' ').join('-');
  }

  console.log(`http://localhost:1337/${image?.url}`);

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
          <Link>{from ? from : string}</Link>
          <Link>Read post </Link>
        </div>
      </div>
    </div>
  );
}
