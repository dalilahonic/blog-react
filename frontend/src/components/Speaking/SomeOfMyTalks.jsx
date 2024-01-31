import { useSelector } from 'react-redux';
import styles from './SomeOfMyTalks.module.css';
import Tab from './Tab';
import { useState } from 'react';
import Video from './Video';

const VIDEOS = [
  {
    heading: 'Interactive web animations with SVG',
    description: 'Beyond nest Berlin',
  },
  {
    heading: 'Limitation breeds creativity',
    description: 'Novi Pazar',
  },
  {
    heading: 'Interactive web animations with SVG',
    description: 'Barcelona',
  },
];

export default function SomeOfMyTalks() {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  const [activeTab, setActiveTab] = useState(0);

  function handleChangeActiveTab(index) {
    setActiveTab(index);
  }

  return (
    <div
      className={`${styles.talks} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.talksHeading}>
        <h1>Here&apos;s some of my talks</h1>
      </div>
      <div className={styles.talksInner}>
        <div className={styles.tabs}>
          {VIDEOS.map((video, index) => {
            return (
              <Tab
                key={index}
                heading={video.heading}
                description={video.description}
                activeTab={activeTab}
                index={index}
                onChangeActiveTab={handleChangeActiveTab}
              />
            );
          })}
        </div>
        <Video activeTab={activeTab} />
      </div>
    </div>
  );
}
