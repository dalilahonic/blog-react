import { Link } from 'react-router-dom';
import styles from './Speaking.module.css';
import { useSelector } from 'react-redux';
import speaker from '../../../assets/speaker.jpg';
import CardSpeaking from './CardSpeaking';

export default function Speaking() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );
  const speakingCards = useSelector(
    (state) => state.speaking
  );

  console.log(speakingCards);

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
          {speakingCards?.map((card) => {
            return (
              <CardSpeaking
                key={card.id}
                heading={card.attributes.heading}
                description={card.attributes.description}
                type={card.attributes.type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
