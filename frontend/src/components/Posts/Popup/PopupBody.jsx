import { useState } from 'react';
import styles from './Popup.module.css';

export default function PopupBody({
  nameInput,
  setNameInput,
}) {
  const [isDescriptionOpen, setIsDescriptionOpen] =
    useState(false);
  const [descriptionInput, setDescriptionInput] =
    useState('');

  function openDescription() {
    setIsDescriptionOpen(true);
  }

  return (
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
  );
}
