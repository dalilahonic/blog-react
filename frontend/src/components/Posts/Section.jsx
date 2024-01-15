import { useSelector } from 'react-redux';
import styles from './Section.module.css';
import BlogPost from './BlogPost';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useReducer, useState } from 'react';
import SearchInput from './SeachInput';
import { circularProgressClasses } from '@mui/material';

export default function Section({ heading, data, search }) {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  const [inputValue, setInputValue] = useState('');
  const [isInputOpen, setInputOpen] = useState(false);
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  function handleClick() {
    setInputOpen(true);
  }

  function handleChangeInput(value) {
    setInputValue(value);
  }

  // useEffect(() => {
  //   const newData = filteredData?.filter((obj) =>

  //   );

  //   console.log(newData);
  // }, [inputValue]);

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
