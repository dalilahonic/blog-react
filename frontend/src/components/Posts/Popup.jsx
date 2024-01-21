import { useEffect } from 'react';
import styles from './Popup.module.css';

export default function Popup({ setIsPopupOpen }) {
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
        <h2>Create new list</h2>
        <input type='text'></input>
      </div>
    </div>
  );
}
