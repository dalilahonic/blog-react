import { useDispatch, useSelector } from 'react-redux';
import classes from './SliderButton.module.css';
import { themeActions } from '../../../store';
import { useState } from 'react';

export default function SliderButton() {
  const [animate, setAnimate] = useState(false);

  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );
  const dispatch = useDispatch();

  function toggleTheme() {
    setAnimate((prev) => !prev);
    dispatch(themeActions.toggleTheme());
  }

  return (
    <div
      onClick={toggleTheme}
      className={`${classes.button} ${
        darkTheme ? classes.dark : classes.light
      } ${animate ? classes.animate : ''}`}
    ></div>
  );
}
