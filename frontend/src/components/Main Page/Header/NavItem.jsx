import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './NavItem.module.css';

function NavItem({ title, img, to }) {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick() {
    if (to) navigate(`/${to}`);
  }

  const isActive = location.pathname === `/${to}`;

  return (
    <div
      onClick={() => handleClick()}
      className={`${styles.iconContainer} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <img src={img} alt={title} />
      <span className={isActive ? styles.active : ''}>
        {title}
      </span>
    </div>
  );
}

export default NavItem;
