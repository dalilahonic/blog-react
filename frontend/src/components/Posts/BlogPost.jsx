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
import { useEffect, useRef, useState } from 'react';
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
  const popupRef = useRef(null);
  const navigate = useNavigate();
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem('isUserLoggedIn');
  const [isSavePopupOpen, setIsSavePopupOpen] =
    useState(false);

  // handle clicks outisde of BlogPost component - close the SavePopupComponent
  useEffect(() => {
    function handleOutsideClick(e) {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target)
      ) {
        setIsSavePopupOpen(false);
      }
    }

    document.addEventListener('click', handleOutsideClick);
  }, []);

  //handle clicks on BlogPost component - navigate to article page
  function handleClick() {
    if (from) {
      window.location.href = link;
    } else {
      navigate(`/posts/${getLink(heading)}`);
    }
  }

  function handleSave(e) {
    e.stopPropagation();
    setIsSavePopupOpen(true);
    dispatch(postsActions.saveArticle({ heading }));
  }

  function handleUnsave(e) {
    e.stopPropagation();
    setIsSavePopupOpen(false);
    dispatch(
      readingListActions.removeFromReadingList({ heading })
    );
    dispatch(postsActions.removeFromSaved({ heading }));
  }

  function handleCheckList(checked, listName) {
    console.log(checked, listName);
    if (checked) {
      let underscoreList = listName.split(' ').join('_');

      const obj = {
        heading,
        description,
        image: image.url,
      };

      dispatch(
        readingListActions.addToReadingList({
          obj,
          listName: underscoreList || 'Reading_List',
        })
      );
    } else if (!checked) {
      dispatch(
        readingListActions.removeFromReadingList({
          heading,
        })
      );
    }
  }

  const lists = useSelector((state) => state.readingList);
  console.log(lists);

  return (
    <div
      ref={popupRef}
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
                onClick={(e) => handleSave(e)}
              />
            ) : (
              <>
                <BookmarkIcon
                  className={styles.save}
                  onClick={(e) => handleUnsave(e)}
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
