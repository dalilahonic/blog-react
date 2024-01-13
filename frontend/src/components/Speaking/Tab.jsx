import { useSelector } from 'react-redux';
import styles from './Tab.module.css';

export default function Tab({
  heading,
  description,
  activeTab,
  index,
  onChangeActiveTab,
}) {
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  const classes = activeTab == index ? styles.active : '';

  return (
    <div
      className={`${styles.tab} ${
        darkTheme ? styles.dark : styles.light
      } ${classes}`}
      onClick={() => onChangeActiveTab(index)}
    >
      <h3>{heading}</h3>
      <p> {description}</p>
    </div>
  );
}
