import styles from './BottomNavbar.module.css';
import pen from '../../../assets/pen.svg';
import microphone from '../../../assets/microphone.svg';
import star from '../../../assets/star.svg';
import flyingThing from '../../../assets/flyingThing.svg';
import NavItem from './NavItem';
import { useSelector } from 'react-redux';

function BottomNavbar() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  return (
    <div
      className={`${styles.bottomNavbar} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <NavItem title='writng' alt='writing' img={pen} />
      <NavItem
        title='speaking'
        alt='speaking'
        img={microphone}
      />
      <NavItem title='workshop' alt='workshop' img={star} />
      <NavItem
        title='register'
        alt='register'
        img={flyingThing}
      />
    </div>
  );
}

export default BottomNavbar;
