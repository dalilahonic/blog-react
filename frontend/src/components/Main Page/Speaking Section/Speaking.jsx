import { Link } from 'react-router-dom';
import styles from './Speaking.module.css';
import { useSelector } from 'react-redux';
import speaker from '../../../assets/speaker.jpg';

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
        <div className={styles.speakingIntro}>
          <div className={styles.speakingText}>
            <h2>Speaking.</h2>
            <p>
              The first time I got asked to speak at a
              conference, my gut reaction was “heck no. That
              sounds terrifying”.
            </p>
            <p>
              So naturally I said yes. Since then I’ve
              spoken at conferences and meet-ups all over
              the world. It still terrifies me.
            </p>
            <Link>
              Check out my videos and upcoming talks.
            </Link>
          </div>
          <div className={styles.speakingPhoto}>
            <img src={speaker} />
          </div>
        </div>

        <div className={styles.speakingTalks}>
          <div className={styles.card}>
            <div>
              <p>Workshop</p>
            </div>
            <div className={styles.divider}></div>
            <div>
              <Link>
                <h2>Getting started with svg animations</h2>
                <p>
                  Animation is one of the best ways to bring
                  brand personality and character to an
                  online experience, but in the busy world
                  of front-end development, it can often be
                  overlooked.
                </p>
                <p>
                  In this workshop we cover everything you
                  need to know to get started with, and
                  master SVG animation.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
