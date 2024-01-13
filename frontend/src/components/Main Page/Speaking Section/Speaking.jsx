import styles from './Speaking.module.css';
import { useSelector } from 'react-redux';
import SpeakingIntro from './IntroHome';
import Talks from './Talks';

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
      <div className={styles.wrapper}>
        <SpeakingIntro />
        <Talks />
      </div>
    </div>
  );
}
