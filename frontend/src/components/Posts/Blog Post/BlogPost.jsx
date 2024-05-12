import styles from './BlogPost.module.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getLink from '../../../utils/getLink';
import { useEffect, useRef, useState } from 'react';
import CardInfo from './CardInfo';
import Links from './Links';

export default function BlogPost({
  heading,
  date,
  description,
  image,
  tags,
  from,
  saved,
  link,
}) {
  const popupRef = useRef(null);
  const navigate = useNavigate();
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );
  const [isSavePopupOpen, setIsSavePopupOpen] =
    useState(false);

  // handle clicks outisde of BlogPost component - close the SavePopupComponent
  useEffect(() => {
    function handleOutsideClick(e) {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target)
      ) {
        setIsSavePopupOpen(false);
      }
    }

    document.addEventListener('click', handleOutsideClick);
  }, []);

  //handle clicks on BlogPost component - navigate to article page
  function handleClick() {
    if (from) {
      window.location.href = link;
    } else {
      navigate(`/posts/${getLink(heading)}`);
    }
  }

  console.log(image);
  return (
    <div
      ref={popupRef}
      onClick={handleClick}
      className={`${styles.blogCard} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.imageContainer}>
        <img className={styles.mainImage} src={image} />
      </div>
      <CardInfo
        saved={saved}
        heading={heading}
        description={description}
        date={date}
        isSavePopupOpen={isSavePopupOpen}
        setIsSavePopupOpen={setIsSavePopupOpen}
      />
      <Links from={from} tags={tags} />
    </div>
  );
}
