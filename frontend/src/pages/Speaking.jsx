import MainSpeaking from '../components/Speaking/MainSpeaking';
import Navigation from '../components/Main Page/Header/Navigation';
import styles from './Speaking.module.css';
import { useSelector } from 'react-redux';

export default function Speaking() {
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
