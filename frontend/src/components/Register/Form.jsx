import { useEffect, useState } from 'react';
import { userActions } from '../../store';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import styles from './Form.module.css';

export default function Form() {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPassword, setConfirmPassword] =
    useState('');
  const [userNameInput, setUserNameInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleSignup(e) {
    e.preventDefault();

    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userNameInput,
        email: emailInput,
        password: passwordInput,
        confirmPassword,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((error) => {
        // setErrorMessage(error);
        console.log(error);
      });
  }

  function handleSignin(e) {
    e.preventDefault();

    fetch('http://localhost:3000/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  // useEffect(() => {
  //     if (loggedInUser) {
  //       navigate(`/${loggedInUser}`);
  //     }
  //   }, [loggedInUser, navigate]);

  //   useEffect(() => {
  //     setEmailInput('');
  //   }, [pathname]);

  return (
    <form
      className={styles.form}
      onSubmit={(e) =>
        pathname === '/signup'
          ? handleSignup(e)
          : handleSignin(e)
      }
    >
      {pathname === '/signup' && (
        <div>
          <label>Username</label>
          <input
            placeholder='Enter your username'
            value={userNameInput}
            onChange={(e) =>
              setUserNameInput(e.target.value)
            }
          />
        </div>
      )}
      <div>
        <label> Email Address</label>
        <input
          value={emailInput}
          placeholder='Enter your email'
          onChange={(e) => setEmailInput(e.target.value)}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type='password'
          value={passwordInput}
          placeholder='Enter your password'
          onChange={(e) => setPasswordInput(e.target.value)}
        />
      </div>
      {pathname === '/signup' && (
        <div>
          <label>Confirm Password</label>
          <input
            type='password'
            placeholder='Enter your password'
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
          />
        </div>
      )}
      <button>
        Sign {pathname === '/signup' ? 'up' : 'in'}
      </button>
      {errorMessage && (
        <p className={styles.error}>{errorMessage}</p>
      )}
    </form>
  );
}
