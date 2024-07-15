import { useSelector } from 'react-redux';
import Heading from '../components/Article/Heading';
import Navigation from '../components/Main Page/Header/Navigation';
import Section from '../components/Posts/Section';
import styles from './Posts.module.css';
import { useEffect, useState } from 'react';
import filterArticles from '../utils/filterArticles';
import useFetch from '../utils/useFetch';
import BottomNavbar from '../components/Main Page/Header/BottomNavbar';

export default function Posts() {
  const [data, setData] = useState([]);
  const [fromMyBlog, setFromMyBlog] = useState([]);
  const [fromElsewhere, setFromElsewhere] = useState([]);

  const [inputValue, setInputValue] = useState('');
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  useFetch('http://localhost:3000/articles', setData);

  useEffect(() => {
    if (data?.length > 1) {
      const fromMyBlogArticles = filterArticles(
        data,
        false,
        inputValue
      );

      const fromElsewhereArticles = filterArticles(
        data,
        true,
        inputValue
      );

      setFromMyBlog(fromMyBlogArticles);
      setFromElsewhere(fromElsewhereArticles);
    }
  }, [data, inputValue]);

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
        <BottomNavbar />
      </div>
    </>
  );
}
