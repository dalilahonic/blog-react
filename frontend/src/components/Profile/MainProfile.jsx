import { useSelector } from 'react-redux';
import styles from './MainProfile.module.css';

export default function MainProfile() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );
  return (
    <div
      className={`${styles.profileMain} ${
        darkTheme ? styles.dark : styles.light
      }`}
    ></div>
  );
}
