import { Link } from 'react-router-dom';
import styles from './IntroHome.module.css';
import speaker from '../../../assets/speaker.jpg';
import { useSelector } from 'react-redux';

export default function SpeakingIntro() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  return (
    <div
      className={`${styles.speakingIntro} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.speakingText}>
        <h2>Speaking.</h2>
        <p>
          The first time I got asked to speak at a
          conference, my gut reaction was “heck no. That
          sounds terrifying”.
        </p>
        <p>
          So naturally I said yes. Since then I’ve spoken at
          conferences and meet-ups all over the world. It
          still terrifies me.
        </p>
        <Link to='/speaking'>
          Check out my videos and upcoming talks.
        </Link>
      </div>
      <div className={styles.speakingPhoto}>
        <img src={speaker} />
      </div>
    </div>
  );
}
