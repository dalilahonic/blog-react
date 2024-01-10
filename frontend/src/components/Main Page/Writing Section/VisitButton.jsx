import { Link } from 'react-router-dom';
import './VisitButton.module.css';
import classes from './VisitButton.module.css';
import { useSelector } from 'react-redux';

export default function VisitButton() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  return (
    <Link>
      <div
        className={`${classes.visitButton} ${
          darkTheme ? classes.dark : classes.light
        }`}
      >
        visit my blog...
      </div>
    </Link>
  );
}
