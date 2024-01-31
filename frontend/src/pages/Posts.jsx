import { useSelector } from 'react-redux';
import Heading from '../components/Article/Heading';
import Navigation from '../components/Main Page/Header/Navigation';
import Section from '../components/Posts/Section';
import styles from './Posts.module.css';
import { useEffect, useState } from 'react';
import filterArticles from '../utils/filterArticles';

export default function Posts() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );
  const [inputValue, setInputValue] = useState('');

  const data = useSelector((state) => state.posts);

  const fromMyBlog = filterArticles(
    data,
    false,
    inputValue
  );

  const fromElsewhere = filterArticles(
    data,
    true,
    inputValue
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleChangeInput(value) {
    setInputValue(value);
  }

  return (
    <>
      <div
        className={`${styles.main} ${
          darkTheme ? styles.dark : styles.light
        }`}
      >
        <Navigation />
        <Heading
          text='writing'
          title='Writing.'
          classN='writing'
        />
        <Section
          heading='From my blog'
          data={fromMyBlog}
          search={true}
          onChangeInput={handleChangeInput}
        />
        <Section
          onChangeInput={handleChangeInput}
          heading='Articles from elsewhere'
          data={fromElsewhere}
        />
      </div>
    </>
  );
}
