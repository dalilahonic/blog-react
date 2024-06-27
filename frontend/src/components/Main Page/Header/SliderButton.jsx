import { useDispatch, useSelector } from 'react-redux';
import classes from './SliderButton.module.css';
import { themeActions } from '../../../store';
import { useState, useEffect } from 'react';

export default function SliderButton() {
  const [animate, setAnimate] = useState(false);

  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const dispatch = useDispatch();

  function toggleTheme() {
    setAnimate(true);
    dispatch(themeActions.toggleTheme());
  }

  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => {
        setAnimate(false);
      }, 200); // Match the duration of the animation
      return () => clearTimeout(timeout);
    }
  }, [animate]);

  return (
    <div
      onClick={toggleTheme}
      className={`${classes.button} ${darkTheme ? classes.dark : classes.light} ${animate ? classes.animate : ''}`}
    ></div>
  );
}
