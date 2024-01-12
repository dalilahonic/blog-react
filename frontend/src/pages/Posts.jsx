import { useSelector } from 'react-redux';
import Heading from '../components/Writing Article/Heading';
import Navigation from '../components/Main Page/Header/Navigation';
import Section from '../components/Posts/Section';
import styles from './Posts.module.css';

export default function Posts() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  const data = useSelector((state) => state.posts);

  const fromMyBlog = data?.filter(
    (article) => !article.attributes.fromElsewhere
  );

  const fromElsewhere = data?.filter(
    (article) => article.attributes.fromElsewhere
  );

  return (
    <>
      <div
        className={`${styles.main} ${
          darkTheme ? styles.dark : styles.light
        }`}
      >
        <Navigation />
        <Heading text={true} title='Writing.' />
        <Section heading='From my blog' data={fromMyBlog} />
        <Section
          heading='Articles from elsewhere'
          data={fromElsewhere}
        />
        <Section />
      </div>
    </>
  );
}
