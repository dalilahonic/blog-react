import { useParams } from 'react-router';
import Heading from '../components/Article/Heading';
import Navigation from '../components/Main Page/Header/Navigation';
import styles from './Tags.module.css';
import Section from '../components/Posts/Section';
import BlogPost from '../components/Posts/BlogPost';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Tags() {
  useEffect(() => {
    scrollTo(0, 0);
  });
  const params = useParams().tagId;

  const data = useSelector((state) => state.posts)?.filter(
    (obj) => obj.attributes.tags?.tags?.includes(params)
  );

  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

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
        title={`Posts tagged - "${params}"`}
      />
      <Section heading='Posts' data={data} />
    </div>
  );
}
