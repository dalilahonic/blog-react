import { useEffect, useState } from 'react';
import styles from './Video.module.css';
import CircularProgress from '@mui/material/CircularProgress';

export default function Video({ activeTab }) {
  const [isLoading, setIsLoading] = useState(true);
  const [clasess, setClasses] = useState('loading');

  useEffect(() => {
    setIsLoading(true);
    setClasses('loading');
  }, [activeTab]);

  function handleLoad() {
    setIsLoading(false);
    setClasses('');
  }

  let src;

  if (activeTab == 0)
    src = 'https://www.youtube.com/embed/kvazBqAlx58';
  else if (activeTab == 1)
    src = 'https://www.youtube.com/embed/Ouf9-bOqJVk';
  else if (activeTab == 2)
    src = 'https://www.youtube.com/embed/1m6en0SQNFs';

  return (
    <div className={`${styles.video} ${styles[clasess]}`}>
      {isLoading && (
        <CircularProgress
          className={styles.progress}
          color='inherit'
        />
      )}
      <iframe
        id='js-featured-video'
        title='Video player: Limitation breeds creativity'
        src={src || ''}
        onLoad={handleLoad}
      ></iframe>
    </div>
  );
}
