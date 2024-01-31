import { useNavigate } from 'react-router';
import styles from './Navigation.module.css';
import { useSelector } from 'react-redux';

export default function LeftNavigation({ classN }) {
  const navigate = useNavigate('');
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  return (
    <div
      className={`${styles.leftNavigation} ${
        styles[classN]
      } ${darkTheme ? styles.dark : styles.light}`}
    >
      <h4 onClick={() => navigate('/')}>Dalila</h4>
    </div>
  );
}
