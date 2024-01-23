import { useDebugValue, useEffect, useState } from 'react';
import styles from './Popup.module.css';
import {
  postsActions,
  readingListActions,
} from '../../store';
import { useDispatch } from 'react-redux';

export default function Popup({
  setIsPopupOpen,
  heading,
  description,
  image,
  onCreateNewList,
  setIsSavePopupOpen,
}) {
  const [isDescriptionOpen, setIsDescriptionOpen] =
    useState(false);
  const dispatch = useDispatch();

  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] =
    useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

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
      setIsPopupOpen(false);
      onCreateNewList({
        isChecked: true,
        identefier: nameInput.split(' ').join('_'),
      });
      setIsSavePopupOpen(false);
    } else {
      return;
    }
  }

  function handleClick() {
    setIsPopupOpen(false);
  }

  function openDescription() {
    setIsDescriptionOpen(true);
  }

  return (
    <div
      className={styles.overflow}
      onClick={() => handleClick()}
    >
      <div
        className={styles.mainCard}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.content}>
          <h2>Create new list</h2>
          <input
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            type='text'
            placeholder='Give it a name'
          ></input>

          {!isDescriptionOpen && (
            <h5 onClick={() => openDescription()}>
              Add a description
            </h5>
          )}

          {isDescriptionOpen && (
            <input
              type='text'
              placeholder='Add a description'
              value={descriptionInput}
              onChange={(e) =>
                setDescriptionInput(e.target.value)
              }
            ></input>
          )}

          <label>
            <input type='checkbox' />
            Make it private
          </label>
        </div>
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
      </div>
    </div>
  );
}
