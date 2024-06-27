import { useSelector } from 'react-redux';
import styles from './NavItem.module.css';

function NavItem({ title, img, alt }) {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  return (
    <div
      className={`${styles.iconContainer} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <img src={img} alt={alt} />
      <span>{title}</span>
    </div>
  );
}

export default NavItem;
