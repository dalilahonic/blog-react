import styles from './Speaking.module.css';
import { useSelector } from 'react-redux';

export default function Speaking() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  return (
    <div
      className={`${styles.mainSpeaking} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <h1>Ovo je naslov</h1>
    </div>
  );
}
