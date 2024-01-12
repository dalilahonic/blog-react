import styles from './SpeakingInto.module.css';
import cssCamp from '../../assets/css-camp.jpg';
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
        <h1>Speaking</h1>
        <p>
          I got into making things on the web back in the
          whimsical days of myspace and neopets.
        </p>
        <p>
          Remember the space jam website, blink tags and
          sparkly trailing cursors?
        </p>
        <p>
          I aim to bring back some of that playfulness to
          the web through my talks and workshops.
        </p>
      </div>
      <div className={styles.speakingPhoto}>
        <div className={styles.cssCamp}> </div>
        <div className={styles.photo}>
          <img src={cssCamp} />
        </div>
      </div>
    </div>
  );
}
