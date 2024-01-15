import styles from './Article.module.css';
import Heading from '../components/Article/Heading';
import Content from '../components/Article/Content';
import Navigation from '../components/Main Page/Header/Navigation';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Article() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div
      className={`${styles.main} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <Navigation />
      <Heading classN='article' />
      <Content />
    </div>
  );
}
