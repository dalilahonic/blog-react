import { useState } from 'react';
import styles from './ListItem.module.css';
import Popup from './Popup';

export default function CreateNewList({ title }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handleClick() {
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  }

  return (
    <div className={styles.listItem}>
      <h4 onClick={handleClick}> {title}</h4>
      {isPopupOpen && (
        <Popup setIsPopupOpen={setIsPopupOpen} />
      )}
    </div>
  );
}
