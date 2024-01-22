import { useSelector } from 'react-redux';
import CreateNewList from './CreateNewList';
import ListItem from './ListItem';
import styles from './SavePopup.module.css';

export default function SavePopup({
  heading,
  description,
  image,
  onCheckList,
  setIsSavePopupOpen,
}) {
  function handleClick(e) {
    e.stopPropagation();
  }

  const lists = useSelector((state) => state.readingList);

  return (
    <div
      onClick={(e) => handleClick(e)}
      className={styles.popup}
    >
      {Object.keys(lists).map((el, i) => {
        return (
          <ListItem
            key={i}
            title={el}
            checked={false}
            onCheckList={onCheckList}
          />
        );
      })}

      <CreateNewList
        title='Create new list'
        heading={heading}
        description={description}
        image={image}
      />
    </div>
  );
}
