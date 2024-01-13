import React from 'react';
import styles from './Talks.module.css';
import CardSpeaking from './CardSpeaking';
import { useSelector } from 'react-redux';

export default function Talks() {
  const speakingCards = useSelector(
    (state) => state.speaking
  );
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  return (
    <div
      className={`${styles.speakingTalks} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
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
  );
}
