import { useDispatch, useSelector } from 'react-redux';
import styles from './BlogPost.module.css';
import { Link, useNavigate } from 'react-router-dom';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {
  postsActions,
  readingListActions,
} from '../../store';
import getLink from '../../utils/getLink';
import { useEffect, useState } from 'react';
import SavePopup from './SavePopup';

export default function BlogPost({
  heading,
  date,
  description,
  image,
  tags,
  from,
  saved,
  link,
}) {
  const [isSavePopupOpen, setIsSavePopupOpen] =
    useState(false);

  useEffect(() => {
    if (isSavePopupOpen) {
      setTimeout(() => {
        setIsSavePopupOpen(false);
      }, 2000);
    }
  }, [isSavePopupOpen]);

  const navigate = useNavigate();
  const darkTheme = useSelector(
    (state) => state.theme.darkThemes
  );
  const dispatch = useDispatch();

  const list = useSelector((state) => state.readingList);
  console.log(list);

  function addToReadingList(e) {
    e.stopPropagation();
    setIsSavePopupOpen(true);
    dispatch(postsActions.saveArticle({ heading }));
  }

  function removeFromReadingList(e) {
    e.stopPropagation();
    setIsSavePopupOpen(false);
    dispatch(
      readingListActions.removeFromReadingList({ heading })
    );
    dispatch(postsActions.removeFromSaved({ heading }));
  }

  const isLoggedIn = localStorage.getItem('isUserLoggedIn');

  function handleClick() {
    if (from) {
      window.location.href = link;
    } else {
      navigate(`/posts/${getLink(heading)}`);
    }
  }

  function handleCheckList(checked, listName) {
    if (checked) {
      let camelListName = listName.split(' ').join('_');

      const obj = {
        heading,
        description,
        image: image.url,
      };

      dispatch(
        readingListActions.addToReadingList({
          obj,
          listName: camelListName || 'Reading_List',
        })
      );
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`${styles.blogCard} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.imageContainer}>
        <img
          className={styles.mainImage}
          src={`http://localhost:1337${image?.url}`}
        />
      </div>
      <div className={styles.infoContainer}>
        <div>
          {isLoggedIn &&
            (!saved ? (
              <BookmarkBorderIcon
                className={styles.save}
                onClick={(e) => addToReadingList(e)}
              />
            ) : (
              <>
                <BookmarkIcon
                  className={styles.save}
                  onClick={(e) => removeFromReadingList(e)}
                />
                {isSavePopupOpen && (
                  <SavePopup
                    heading={heading}
                    description={description}
                    image={image}
                    onCheckList={handleCheckList}
                    setIsSavePopupOpen={setIsSavePopupOpen}
                  />
                )}
              </>
            ))}
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
