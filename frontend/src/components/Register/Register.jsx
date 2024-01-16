import { useLocation } from 'react-router';
import styles from './Register.module.css';
import { Link } from 'react-router-dom';

export default function Register() {
  const pathname = useLocation().pathname;

  return (
    <div className={styles.main}>
      <div className={styles.registerCard}>
        <div>
          <label> Email Address</label>
          <input placeholder='Enter your email' />
        </div>
        {pathname === '/signup' && (
          <div>
            <label>Confirm Email</label>
            <input placeholder='Enter your email' />
          </div>
        )}
        <div>
          <label> Password</label>
          <input placeholder='Enter your password' />
        </div>
        {pathname === '/signup' && (
          <div>
            <label>Confirm Password</label>
            <input placeholder='Enter your email' />
          </div>
        )}
        <button>
          Sign {pathname === '/signup' ? 'up' : 'in'}
        </button>
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
