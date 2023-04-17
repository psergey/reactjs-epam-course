import React, { FC, FormEvent, FormEventHandler, ReactElement } from 'react';
import styles from './MovieItemForm.module.css';

interface MovieItem {
  name?: string;
  posterUrl?: string;
  releaseDate?: Date;
  duration?: number;
  rating?: number;
  description?: string;
  genre?: string;
  genres?: string[];
  onSubmit(): void;
}

const MovieItemForm: FC<MovieItem> = (props: MovieItem): ReactElement => {
  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(Object.fromEntries(new FormData(e.target as HTMLFormElement)));

    props.onSubmit();
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.group}>
        <div className={styles['column-long']}>
          <label>Title</label>
          <div>
            <input defaultValue={props.name} type="text" name="name" placeholder="Title"></input>
          </div>
        </div>
        <div className={styles.column}>
          <label>Release Date</label>
          <div>
            <input
              defaultValue={props.releaseDate?.toJSON().split('T', 1)[0]}
              type="date"
              name="releaseDate"
              placeholder="Select Date"></input>
          </div>
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles['column-long']}>
          <label>Movie Url</label>
          <div>
            <input defaultValue={props.posterUrl} name="posterUrl" placeholder="https://"></input>
          </div>
        </div>
        <div className={styles.column}>
          <label>Rating</label>
          <div>
            <input
              defaultValue={props.rating}
              type="number"
              min={0}
              max={10}
              step={0.1}
              name="rating"
              placeholder="Rating"></input>
          </div>
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles['column-long']}>
          <label>Genre</label>
          <div>
            <input></input>
          </div>
        </div>
        <div className={styles.column}>
          <label>Runtime</label>
          <div>
            <input type="number" min={0} step={1} defaultValue={props.duration} placeholder="minutes"></input>
          </div>
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.description}>
          <label>Overview</label>
          <div>
            <textarea defaultValue={props.description} name="description" placeholder="Description"></textarea>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default MovieItemForm;
