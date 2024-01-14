import MainSpeaking from '../components/Speaking/MainSpeaking';
import Navigation from '../components/Main Page/Header/Navigation';
import styles from './Speaking.module.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Speaking() {
  useEffect(() => {
    scrollTo(0, 0);
  });

  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  return (
    <>
      <div
        className={`${styles.main} ${
          darkTheme ? styles.dark : styles.light
        }`}
      >
        <Navigation classN='speaking' />
        <MainSpeaking />
      </div>
    </>
  );
}
