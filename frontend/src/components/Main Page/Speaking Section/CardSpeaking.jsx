import { Link } from 'react-router-dom';
import styles from './CardSpeaking.module.css';
import { useSelector } from 'react-redux';

export default function CardSpeaking({
  heading,
  description,
  type,
}) {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  return (
    <div
      className={`${styles.card} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.type}>
        <p>{type}</p>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.content}>
        <Link>
          <h2>{heading}</h2>
          <p>{description}</p>
        </Link>
      </div>
    </div>
  );
}
