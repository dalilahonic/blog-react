import styles from './Talks.module.css';
import CardSpeaking from './CardSpeaking';
import { useSelector } from 'react-redux';
import useFetch from '../../../utils/useFetch';
import { useState } from 'react';

export default function Talks() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  const [speeches, setSpeeches] = useState([]);

  useFetch('http://localhost:3000/speeches', setSpeeches);

  return (
    <div
      className={`${styles.speakingTalks} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      {speeches?.map((card) => {
        return (
          <CardSpeaking
            key={card._id}
            title={card.title}
            description={card.description}
            type={card.type}
          />
        );
      })}
    </div>
  );
}
