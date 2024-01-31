import styles from './Navigation.module.css';
import RightNavigation from './RightNavigation';
import LeftNavigation from './LeftNavigation';

export default function Navigation({ classN }) {
  return (
    <nav className={styles.nav}>
      <LeftNavigation classN={classN} />
      <RightNavigation classN={classN} />
    </nav>
  );
}
