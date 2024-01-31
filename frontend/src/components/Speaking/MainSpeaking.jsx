import { useSelector } from 'react-redux';
import styles from './MainSpeaking.module.css';
import SpeakingIntro from './SpeakingIntro';
import SomeOfMyTalks from './SomeOfMyTalks';
import Talks from '../Main Page/Speaking Section/Talks';
export default function MainSpeaking() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  return (
    <>
      <div
        className={`${styles.speakingMain} ${
          darkTheme ? styles.dark : styles.light
        }`}
      >
        <div className={`${styles.speaking}`}>
          <div className={styles.wrapper}>
            <SpeakingIntro />
            <SomeOfMyTalks />
            <div className={styles.title}>
              <h1>Upcoming events</h1>
            </div>
            <Talks />
          </div>
        </div>
      </div>
    </>
  );
}
