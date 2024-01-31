import { useLocation } from 'react-router';
import styles from './Register.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Form from './Form';

export default function Register() {
  const pathname = useLocation().pathname;
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  return (
    <div
      className={`${styles.main} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.registerCard}>
        <Form />
      </div>
      <div className={styles.dontHaveAccount}>
        <p>
          {pathname === '/signup'
            ? 'Alredy have an account?'
            : `Don't have an account?`}{' '}
          <Link
            to={
              pathname === '/signup' ? '/signin' : '/signup'
            }
          >
            Sign {pathname === '/signup' ? 'in' : 'up'}
          </Link>
        </p>
      </div>
    </div>
  );
}
