import { useSelector } from 'react-redux';
import CreateNewList from './CreateNewList';
import ListItem from './ListItem';
import styles from './SavePopup.module.css';
import { useState } from 'react';

export default function SavePopup({
  heading,
  description,
  image,
  onCheckList,
  setIsSavePopupOpen,
}) {
  const [newList, setNewList] = useState({});

  // when you click on the Savepop component it doesn't lead you to Article page
  function handleClick(e) {
    e.stopPropagation();
  }

  const lists = useSelector((state) => state.readingList);

  function handleCreateNewList(obj) {
    setNewList(obj);
  }

  return (
    <div
      onClick={(e) => handleClick(e)}
      className={styles.popup}
    >
      {Object.keys(lists).map((el, i) => {
        return (
          <ListItem
            key={i}
            title={el.split('_').join(' ')}
            checked={
              i == 0 || newList.identefier == el
                ? true
                : false
            }
            onCheckList={onCheckList}
          />
        );
      })}

      <CreateNewList
        title='Create new list'
        heading={heading}
        description={description}
        image={image}
        onCreateNewList={handleCreateNewList}
        setIsSavePopupOpen={setIsSavePopupOpen}
      />
    </div>
  );
}
