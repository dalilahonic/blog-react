import { useSelector } from 'react-redux';
import styles from './MainProfile.module.css';
import { useParams } from 'react-router';
import ProfileRight from './ProfileRight';
import ProfileLeft from './ProfileLeft';

export default function MainProfile() {
  const params = useParams().username;
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  return (
    <div
      className={`${styles.profileMain} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.username}>
        <h1>{params}</h1>
      </div>
      <div className={styles.profile}>
        <ProfileLeft />
        <ProfileRight />
      </div>
    </div>
  );
}
