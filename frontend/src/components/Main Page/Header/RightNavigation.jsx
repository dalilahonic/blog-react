import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import { useSelector } from 'react-redux';
import SliderButton from './SliderButton';

export default function RightNavigation({ classN }) {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  const isUserLoggedIn = localStorage.getItem(
    'isUserLoggedIn'
  );

  const loggedInUser = localStorage.getItem('loggedInUser');

  return (
    <div
      className={`${styles.rightNavigation} ${
        styles[classN]
      } ${darkTheme ? styles.dark : styles.light}`}
    >
      <ul>
        <Link to='/posts'>
          <li>writing</li>
        </Link>
        <Link to='/speaking'>
          <li>speaking</li>
        </Link>
        <Link>
          <li>workshop</li>
        </Link>
        <Link
          to={
            isUserLoggedIn ? `/${loggedInUser}` : '/signin'
          }
        >
          <li>{isUserLoggedIn ? 'profile' : 'register'}</li>
        </Link>
      </ul>
      <SliderButton />
    </div>
  );
}
