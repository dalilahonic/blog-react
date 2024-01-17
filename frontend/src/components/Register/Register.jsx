import { useLocation, useNavigate } from 'react-router';
import styles from './Register.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store';

export default function Register() {
  const pathname = useLocation().pathname;
  const dispatch = useDispatch();
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  const isUserLoggedIn = useSelector(
    (state) => state.users.isUserLoggedIn
  );
  console.log(isUserLoggedIn);

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [confirmPassword, setConfirmPassword] =
    useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const userData = useSelector(
    (state) => state.users.users
  );
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();

    const validUserData = userData.filter(
      (user) => user.email && user.password
    );

    if (
      !emailInput ||
      !confirmEmail ||
      !passwordInput ||
      !confirmPassword
    ) {
      setErrorMessage(
        'Please fill in all the required fields.'
      );
      return;
    }

    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        emailInput
      )
    ) {
      console.log('');
    } else {
      setErrorMessage(
        'Please enter a valid email address.'
      );
      return;
    }

    if (emailInput !== confirmEmail) {
      setErrorMessage(`Emails don't match`);
      return;
    }

    if (passwordInput.length < 8) {
      setErrorMessage(
        'Password must be at least 8 characters long'
      );
      return;
    }

    if (passwordInput !== confirmPassword) {
      setErrorMessage(`Password don't match`);
      return;
    }

    const doesAccountExist = validUserData.some(
      (acc) => acc.email == emailInput
    );

    if (doesAccountExist) {
      setErrorMessage(
        'An account with this email already exists. Please sign in or use a different email.'
      );
      return;
    } else {
      navigate('/signin');
    }

    setErrorMessage('');
    setEmailInput('');
    setConfirmEmail('');
    setPasswordInput('');
    setConfirmPassword('');

    if (userData) {
      fetch(
        'https://blog-36b42-default-rtdb.firebaseio.com/users.json',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([
            ...validUserData,
            {
              email: emailInput,
              password: passwordInput,
            },
          ]),
        }
      )
        .then((res) => res.json())
        .then((data) =>
          dispatch(userActions.addData(data))
        );
    }
  }

  function handleSignin(e) {
    e.preventDefault();

    if (!emailInput || !passwordInput) {
      setErrorMessage(
        'Please fill in all the required fields.'
      );
      return;
    }

    const validUserData = userData.filter(
      (user) => user?.email && user?.password
    );

    const isAccValid = validUserData?.some(
      (acc) =>
        acc.password === passwordInput &&
        acc.email === emailInput
    );

    if (isAccValid) {
      dispatch(userActions.signIn());
      setErrorMessage('');
      setEmailInput('');
      setPasswordInput('');
    } else {
      setErrorMessage('Invalid email or password!');
      return;
    }
  }

  if (isUserLoggedIn) {
    navigate('/profile');
  }

  return (
    <div
      className={`${styles.main} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.registerCard}>
        <form
          onSubmit={(e) =>
            pathname === '/signup'
              ? handleSignup(e)
              : handleSignin(e)
          }
        >
          <div>
            <label> Email Address</label>
            <input
              value={emailInput}
              placeholder='Enter your email'
              onChange={(e) =>
                setEmailInput(e.target.value)
              }
            />
          </div>
          {pathname === '/signup' && (
            <div>
              <label>Confirm Email</label>
              <input
                placeholder='Enter your email'
                value={confirmEmail}
                onChange={(e) =>
                  setConfirmEmail(e.target.value)
                }
              />
            </div>
          )}
          <div>
            <label>Password</label>
            <input
              value={passwordInput}
              placeholder='Enter your password'
              onChange={(e) =>
                setPasswordInput(e.target.value)
              }
            />
          </div>
          {pathname === '/signup' && (
            <div>
              <label>Confirm Password</label>
              <input
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
