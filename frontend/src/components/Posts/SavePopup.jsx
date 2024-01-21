import CreateNewList from './CreateNewList';
import ListItem from './ListItem';
import styles from './SavePopup.module.css';

export default function Popup() {
  function handleClick(e) {
    e.stopPropagation();
  }

  return (
    <div
      onClick={(e) => handleClick(e)}
      className={styles.popup}
    >
      <ListItem title='Reading List' checked={true} />
      <CreateNewList title='Create new list' />
    </div>
  );
}
