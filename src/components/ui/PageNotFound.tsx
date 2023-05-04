import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.css';

const NotFoundPage: FC = (): ReactElement => {
  return (
    <div className={styles.error}>
      <h1>Lost your way?</h1>
      <div className={styles.content}>
        <p>Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.</p>
        <div className={styles.buttons}>
          <Link to={'/'}>
            <button type="button" className={styles.back}>
              <span>netflixroulette home</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
