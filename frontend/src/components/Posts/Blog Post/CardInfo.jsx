import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SavePopup from '../Lists/SavePopup';
import styles from './BlogPost.module.css';
import {
  postsActions,
  readingListActions,
} from '../../../store';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

export default function CardInfo({
  saved,
  heading,
  description,
  date,
  isSavePopupOpen,
  setIsSavePopupOpen,
}) {
  const isLoggedIn = localStorage.getItem('isUserLoggedIn');

  const dispatch = useDispatch();

  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const newDate = new Date(date);

    const formattedDateString = format(
      newDate,
      "do 'of' MMMM yyyy"
    );
    setFormattedDate(formattedDateString);
  }, [date]);

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
    if (checked) {
      let underscoreList = listName.split(' ').join('_');

      const obj = {
        heading,
        description,
        // image: image.url,
      };

      setTimeout(() => {
        dispatch(
          readingListActions.addToReadingList({
            obj,
            listName: underscoreList || 'Reading_List',
          })
        );
      }, 10);
    } else if (!checked) {
      dispatch(
        readingListActions.removeFromReadingList({
          heading,
        })
      );
    }
  }

  return (
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
                  // image={image}
                  onCheckList={handleCheckList}
                  setIsSavePopupOpen={setIsSavePopupOpen}
                />
              )}
            </>
          ))}
        <p>
          <time>{formattedDate}</time>
        </p>
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
