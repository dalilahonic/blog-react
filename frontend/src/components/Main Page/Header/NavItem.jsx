import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './NavItem.module.css';

function NavItem({ title, img, to }) {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  const navigate = useNavigate();

  function handleClick() {
    if (to) navigate(`/${to}`);
  }

  return (
    <div
      onClick={() => handleClick()}
      className={`${styles.iconContainer} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <img src={img} alt={title} />
      <span>{title}</span>
    </div>
  );
}

export default NavItem;
