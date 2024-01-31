import { Link, useNavigate } from 'react-router-dom';
import styles from './BlogPost.module.css';

export default function Links({ from, tags }) {
  const navigate = useNavigate();

  return (
    <div className={styles.links}>
      {from && <Link>{from}</Link>}
      <div>
        {!from &&
          tags?.map((tag, i) => {
            return (
              <Link
                key={i}
                className={styles.tagLink}
                onClick={(e) => {
                  navigate(`/tags/${tag}`);
                  e.stopPropagation();
                }}
              >
                {tag} {i == tags.length - 1 ? '' : ' |'}{' '}
              </Link>
            );
          })}
      </div>
      <Link>Read post </Link>
    </div>
  );
}
