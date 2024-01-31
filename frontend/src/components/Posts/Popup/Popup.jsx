import { useEffect, useState } from 'react';
import styles from './Popup.module.css';

import PopupBody from './PopupBody';
import ButtonsContainer from './ButtonsContainer';

export default function Popup({
  setIsPopupOpen,
  heading,
  description,
  image,
  setIsSavePopupOpen,
}) {
  const [nameInput, setNameInput] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  function handleClick() {
    setIsPopupOpen(false);
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
        <PopupBody
          nameInput={nameInput}
          setNameInput={setNameInput}
        />
        <ButtonsContainer
          nameInput={nameInput}
          setIsSavePopupOpen={setIsSavePopupOpen}
          setIsPopupOpen={setIsPopupOpen}
          heading={heading}
          description={description}
          image={image}
        />
      </div>
    </div>
  );
}
