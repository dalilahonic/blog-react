import { useSelector } from 'react-redux';
import styles from './Footer.module.css';
import avatarDark from '../../../assets/avatarDark.svg';
import avatarLight from '../../../assets/avatarLight.svg';

export default function Footer() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );
  return (
    <div
      className={`${styles.footer} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.contact}>
        <div className={styles.contactLeft}>
          <h1>I&apos;m always up for a chat</h1>
          <p>
            <span>Pop me an email</span> at
            @dalilahonic1@gmail.com or give me a shout on
            social media.
          </p>
        </div>
        <div className={styles.contactRight}>
          <img src={darkTheme ? avatarDark : avatarLight} />
        </div>
      </div>
    </div>
  );
}
