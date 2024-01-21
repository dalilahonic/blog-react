import { useState } from 'react';
import styles from './ListItem.module.css';

export default function ListItem({ title, checked }) {
  const [isChecked, setIsChecked] = useState(checked);

  function handleClick() {
    setIsChecked((prev) => !prev);
  }

  return (
    <div className={styles.listItem}>
      <input
        type='checkbox'
        checked={isChecked ? true : false}
        onClick={() => handleClick()}
      />
      <label> {title}</label>
    </div>
  );
}
