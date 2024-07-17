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
