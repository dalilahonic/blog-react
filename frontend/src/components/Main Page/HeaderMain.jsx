import { useState } from 'react';
import classes from './HeaderMain.module.css';
import { Link } from 'react-router-dom';

export default function HeaderMain() {
  const [darkTheme, setDarkTheme] = useState(true);

  function changeTheme() {}

  return (
    <div className={classes.main}>
      <nav>
        <div
          className={`${classes.leftNavigation} ${
            darkTheme ? classes.dark : classes.light
          }`}
        ></div>
        <div className={classes.rightNavigation}>
          <ul>
            <Link to='/writing'>
              <li>writing</li>
            </Link>
            <Link to='/speaking'>
              <li>speaking</li>
            </Link>
            <li>workshop</li>
            <li>playing</li>
            <div
              onClick={changeTheme}
              className={classes.button}
            ></div>
          </ul>
        </div>
      </nav>
      <div className={classes.mainContainer}>
        <div className={classes.leftContainer}></div>
        <div className={classes.rightContainer}></div>
      </div>
    </div>
  );
}
