import { useSelector } from 'react-redux';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
import SliderButton from '../Header/SliderButton';

export default function Navigation() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  return (
    <nav>
      <div
        className={`${styles.leftNavigation} ${
          darkTheme ? styles.dark : styles.light
        }`}
      ></div>
      <div
        className={`${styles.rightNavigation} ${
          darkTheme ? styles.dark : styles.light
        }`}
      >
        <ul>
          <Link to='/writing'>
            <li>writing</li>
          </Link>
          <Link to='/speaking'>
            <li>speaking</li>
          </Link>
          <Link>
            <li>workshop</li>
          </Link>
          <Link>
            <li>playing</li>
          </Link>
          <SliderButton />
        </ul>
      </div>
    </nav>
  );
}
