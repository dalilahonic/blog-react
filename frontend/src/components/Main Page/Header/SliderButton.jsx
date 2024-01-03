import { useDispatch } from 'react-redux';
import classes from './SliderButton.module.css';
import { useState } from 'react';
import { themeActions } from '../../../store';

export default function SliderButton() {
  const [toggleClasses, setToggleClasses] = useState(false);
  const dispatch = useDispatch();

  function toggleTheme() {
    setToggleClasses((prev) => !prev);
    dispatch(themeActions.toggleTheme());
  }

  return (
    <div
      onClick={toggleTheme}
      className={`${classes.button} ${
        toggleClasses ? classes.on : null
      }`}
    ></div>
  );
}
