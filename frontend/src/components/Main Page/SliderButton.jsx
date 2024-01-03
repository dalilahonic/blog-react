import classes from './SliderButton.module.css';
import { useState } from 'react';

export default function SliderButton({ setDarkTheme }) {
  const [toggleClasses, setToggleClasses] = useState(false);

  function toggleTheme() {
    setToggleClasses((prev) => !prev);
    setDarkTheme((prev) => !prev);
  }
  return (
    <div
      onClick={toggleTheme}
      className={`${classes.button} ${
        toggleClasses ? classes.on : null
      }`}
    >
      <span />
    </div>
  );
}
