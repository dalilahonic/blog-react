import { useState } from 'react';
import styles from './ListItem.module.css';
import Popup from '../Popup/Popup';

export default function CreateNewList({
  title,
  heading,
  description,
  image,
  setIsSavePopupOpen,
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handleClick() {
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  }

  return (
    <div className={styles.listItem}>
      <h4 onClick={handleClick}> {title}</h4>
      {isPopupOpen && (
        <Popup
          setIsPopupOpen={setIsPopupOpen}
          heading={heading}
          description={description}
          image={image}
          setIsSavePopupOpen={setIsSavePopupOpen}
        />
      )}
    </div>
  );
}
