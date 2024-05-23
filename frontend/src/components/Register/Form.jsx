import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import styles from './Form.module.css';

export default function Form() {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

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
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.errors) {
          setErrorMessage('');
          navigate('/verify');
        } else {
          setErrorMessage(data.errors[0].msg);
        }
      })
      .catch((error) => {
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
      })
      .catch((err) => {
        console.log(err);
        // setErrorMessage(err);
      });
  }

  // useEffect(() => {
  //     if (loggedInUser) {
  //       navigate(`/${loggedInUser}`);
  //     }
  //   }, [loggedInUser, navigate]);

  useEffect(() => {
    setEmailInput('');
    setPasswordInput('');
    setConfirmPassword('');
    setUserNameInput('');
  }, [pathname]);

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
