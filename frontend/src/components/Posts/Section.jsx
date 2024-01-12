import { useSelector } from 'react-redux';
import styles from './Section.module.css';
import BlogPost from './BlogPost';

export default function Section({ heading, data }) {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  console.log(data);

  return (
    <div
      className={`${styles.section} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.sectionHeading}>
        <h1>{heading}</h1>
      </div>
      <div className={styles.blogPosts}>
        {data?.map((post) => {
          return (
            <BlogPost
              key={post.id}
              heading={post.attributes.heading}
              date={post.attributes.date}
              description={post.attributes.description}
              image={post.attributes.img.data?.attributes}
              from={post.attributes.from}
              tags={post.attributes?.tags?.tags}
            />
          );
        })}
      </div>
    </div>
  );
}
