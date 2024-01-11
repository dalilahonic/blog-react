import Heading from '../components/Article/Heading';
import Navigation from '../components/Main Page/Header/Navigation';
import Section from '../components/Posts/Section';
import styles from './Posts.module.css';

export default function Posts() {
  return (
    <>
      <div className={styles.main}>
        <Navigation />
        <Heading />
        <Section />
      </div>
    </>
  );
}
