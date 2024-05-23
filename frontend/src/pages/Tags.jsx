import { useParams } from 'react-router';
import Heading from '../components/Article/Heading';
import Navigation from '../components/Main Page/Header/Navigation';
import styles from './Tags.module.css';
import Section from '../components/Posts/Section';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import useFetch from '../utils/useFetch';

export default function Tags() {
  const tag = useParams().tagId;
  const [data, setData] = useState([]);

  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  useEffect(() => {
    scrollTo(0, 0);
  });

  useFetch(`http://localhost:3000/tags/${tag}`, setData);

  return (
    <div
      className={`${styles.main} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <Navigation />
      <Heading
        classN='writing'
        text={true}
        title={`Posts tagged - "${tag}"`}
      />
      <Section heading='Posts' data={data} />
    </div>
  );
}
