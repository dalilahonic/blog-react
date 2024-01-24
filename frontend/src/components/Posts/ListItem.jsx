import { useEffect, useState } from 'react';
import styles from './ListItem.module.css';

export default function ListItem({
  title,
  checked,
  onCheckList,
}) {
  const [isChecked, setIsChecked] = useState(checked);

  function handleChange() {
    setIsChecked((prev) => !prev);
  }

  console.log(title, checked);

  useEffect(() => {
    onCheckList(isChecked, title);
  }, [isChecked, checked, title]);

  return (
    <div className={styles.listItem}>
      <input
        type='checkbox'
        checked={isChecked ? true : false}
        onChange={() => handleChange()}
      />
      <label>{title}</label>
    </div>
  );
}
