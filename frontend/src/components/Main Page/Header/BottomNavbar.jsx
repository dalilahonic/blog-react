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
      <NavItem title='writng' img={pen} to='posts' />
      <NavItem
        title='speaking'
        img={microphone}
        to='speaking'
      />
      <NavItem title='workshop' img={star} />
      <NavItem
        title='register'
        img={flyingThing}
        to='signin'
      />
    </div>
  );
}

export default BottomNavbar;
