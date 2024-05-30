import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './Verify.module.css';

function Verify() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3000/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        verificationCode: code,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setError(data.errors[0].msg);
        } else {
          setError('');
          navigate(`/${data.username}`);
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.center}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>
          Please enter a code we sent to your email adress
        </p>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type='submit'>Submit</button>
        {error && <p className={styles.error}> {error}</p>}
      </form>
    </div>
  );
}

export default Verify;
