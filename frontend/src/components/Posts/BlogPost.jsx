import styles from './BlogPost.module.css';

export default function BlogPost() {
  return (
    <div className={styles.blogCard}>
      <div className={styles.imageContainer}>
        <img />
      </div>
      <div className={styles.infoContainer}>
        <p>18th November 2022</p>
        <h1> Modern frontend</h1>
        <p> Description </p>
      </div>
    </div>
  );
}
