import classes from './HeaderMain.module.css';

export default function HeaderMain() {
  return (
    <div className={classes.main}>
      <nav>
        <div className={classes.leftNavigation}></div>
        <div className={classes.rightNavigation}>
          <ul>
            <li>writing</li>
            <li>speaking</li>
            <li>workshop</li>
            <li>playing</li>
            <button></button>
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
