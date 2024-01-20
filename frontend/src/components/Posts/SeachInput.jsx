import { useState } from 'react';
import styles from './SearchInput.module.css';

export default function SearchInput({ onChangeInput }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <input
      className={styles.searchInput}
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
        onChangeInput(e.target.value);
      }}
    />
  );
}
