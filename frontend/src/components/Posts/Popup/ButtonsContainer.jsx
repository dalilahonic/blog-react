import styles from './Popup.module.css';
import { useDispatch } from 'react-redux';
import {
  postsActions,
  readingListActions,
} from '../../../store';

export default function ButtonsContainer({
  nameInput,
  setIsSavePopupOpen,
  setIsPopupOpen,
  heading,
  description,
  image,
}) {
  const dispatch = useDispatch();

  function addToReadingList() {
    if (nameInput.length >= 1) {
      const obj = {
        heading,
        description,
        image: image.url,
      };

      dispatch(
        readingListActions.addToReadingList({
          obj,
          listName: nameInput.split(' ').join('_'),
        })
      );

      dispatch(postsActions.saveArticle({ heading }));

      setIsSavePopupOpen(false);
    } else {
      return;
    }
  }
  return (
    <div className={styles.buttons}>
      <button
        className={styles.cancelButton}
        onClick={() => setIsPopupOpen(false)}
      >
        Cancel
      </button>
      <button
        onClick={addToReadingList}
        className={styles.createButton}
        style={{
          opacity: nameInput.length >= 1 ? 1 : 0.3,
          cursor:
            nameInput.length >= 1 ? 'pointer' : 'auto',
        }}
      >
        Create
      </button>
    </div>
  );
}
