import { Link, useNavigate } from 'react-router-dom';
import styles from './CardSpeaking.module.css';
import { useSelector } from 'react-redux';
import getLink from '../../../utils/getLink';

export default function CardSpeaking({
  title,
  description,
  type,
}) {
  const navigate = useNavigate();
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  function handleClick() {
    navigate(`/speaking/${getLink(title)}`);
  }

  return (
    <div
      onClick={() => handleClick()}
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
          <h2>{title}</h2>
          <p>{description}</p>
        </Link>
      </div>
    </div>
  );
}
