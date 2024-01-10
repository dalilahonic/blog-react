import { useDispatch, useSelector } from 'react-redux';
import classes from './SliderButton.module.css';
import { themeActions } from '../../../store';

export default function SliderButton() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );
  const dispatch = useDispatch();

  function toggleTheme() {
    dispatch(themeActions.toggleTheme());
  }

  return (
    <div
      onClick={toggleTheme}
      className={`${classes.button} ${
        darkTheme ? null : classes.on
      }`}
    ></div>
  );
}
