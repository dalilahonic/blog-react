import { useDispatch, useSelector } from 'react-redux';
import styles from './BlogPost.module.css';
import { Link, useNavigate } from 'react-router-dom';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { readingListActions } from '../../store';
import { useState } from 'react';

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
  const dispatch = useDispatch();
  const [saved, setSaved] = useState(false);

  function getLink(heading) {
    return heading.toLowerCase().split(' ').join('-');
  }

  function addToReadingList(e) {
    e.stopPropagation();
    setSaved((prev) => !prev);
    const obj = {
      heading,
      description,
      image: image.url,
    };

    dispatch(readingListActions.addToReadingList(obj));
  }

  function removeFromReadingList(e) {
    e.stopPropagation();
    setSaved((prev) => !prev);
    dispatch(
      readingListActions.removeFromReadingList(heading)
    );
  }

  const reading = useSelector(
    (state) => state.readingList.readingList
  );

  return (
    <div
      onClick={() => navigate(`/posts/${getLink(heading)}`)}
      className={`${styles.blogCard} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.imageContainer}>
        <img
          className={styles.mainImage}
          src={`http://localhost:1337${image?.url}`}
        />
        {!saved ? (
          <BookmarkBorderIcon
            className={styles.save}
            onClick={(e) => addToReadingList(e)}
          />
        ) : (
          <BookmarkIcon
            className={styles.save}
            onClick={(e) => removeFromReadingList(e)}
          />
        )}
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
