import { useLocation, useNavigate } from 'react-router';
import styles from './Register.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store';

export default function Register() {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  // const isUserLoggedIn = useSelector(
  //   (state) => state.users.isUserLoggedIn
  // );

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [confirmPassword, setConfirmPassword] =
    useState('');
  const [userNameInput, setUserNameInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedInUser, setLoggedInUser] = useState('');

  const userData = useSelector(
    (state) => state.users.users
  );

  function handleSignup(e) {
    e.preventDefault();

    const validUserData = userData?.filter((user) => user);

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

    const doesUsernameExists = validUserData.some(
      (acc) => acc.username === userNameInput
    );

    const doesAccountExist = validUserData.some(
      (acc) => acc.email == emailInput
    );

    if (doesAccountExist) {
      setErrorMessage(
        'An account with this email already exists. Please sign in or use a different email.'
      );
      return;
    } else if (doesUsernameExists) {
      setErrorMessage(
        'An account with this username already exists. Please sign in or use a different email.'
      );
      return;
    } else {
      navigate('/signin');
    }

    setErrorMessage('');
    setUserNameInput('');
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
              isLoggedIn: false,
              username: userNameInput,
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

    const targetIndex = validUserData?.findIndex(
      (acc) =>
        acc.email === emailInput &&
        acc.password == passwordInput
    );

    const targetAcc = validUserData.find(
      (acc) =>
        acc.email === emailInput &&
        acc.password == passwordInput
    );

    if (isAccValid) {
      setLoggedInUser(targetAcc.username);
      fetch(
        `https://blog-36b42-default-rtdb.firebaseio.com/users/${targetIndex}.json`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...targetAcc,
            isLoggedIn: true,
          }),
        }
      );
      dispatch(userActions.signIn());
      localStorage.setItem('loggedIn', true);
      localStorage.setItem(
        'loggedInUser',
        targetAcc.username
      );
      setErrorMessage('');
      setEmailInput('');
      setPasswordInput('');
    } else {
      setErrorMessage('Invalid email or password!');
      return;
    }
  }

  useEffect(() => {
    if (loggedInUser) {
      navigate(`/${loggedInUser}`);
    }
  }, [loggedInUser, navigate]);

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
              type='password'
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
