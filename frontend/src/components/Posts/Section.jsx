import { useSelector } from 'react-redux';
import styles from './Section.module.css';
import BlogPost from './Blog Post/BlogPost';

import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import SearchInput from './SeachInput';

export default function Section({
  heading,
  data,
  search,
  onChangeInput,
}) {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  function handleClick() {
    setIsInputOpen((prev) => !prev);
  }

  function handleChangeInput(value) {
    onChangeInput(value);
  }

  return (
    <div
      className={`${styles.section} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.sectionHeading}>
        <h1>{heading} </h1>
        {search && (
          <span>
            <SearchIcon
              fontSize='large'
              onClick={handleClick}
            />
            {isInputOpen && (
              <SearchInput
                onChangeInput={handleChangeInput}
              />
            )}
          </span>
        )}
      </div>
      <div className={styles.blogPosts}>
        {data?.map((post) => {
          return (
            <BlogPost
              key={post._id}
              // saved={post.saved}
              heading={post.title}
              date={post.date}
              description={post.description}
              image={post.image}
              from={post.sourceBlogName}
              tags={post.tags}
              link={post.linkToArticle}
            />
          );
        })}
      </div>
    </div>
  );
}
