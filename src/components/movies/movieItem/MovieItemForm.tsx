import React, { FC, FormEvent, FormEventHandler, ReactElement, useState } from 'react';
import styles from './MovieItemForm.module.css';
import MultiSelectDropdown from '../../dropdown/MultiSelectDropdown';

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
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    //console.log(Object.fromEntries(new FormData(e.target as HTMLFormElement)));

    props.onSubmit();
  };

  const onFormResetHandler = () => {
    setSelectedGenres([]);
  };

  const onGenreSelectedHandler = (item: string) => {
    setSelectedGenres(prev => {
      console.log(item);
      const items = [...prev];
      if (items.includes(item)) {
        return items.filter(el => el !== item);
      } else {
        items.push(item);
        return items;
      }
    });
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
          <div className={styles.select}>
            <MultiSelectDropdown
              placeholder="Select Genre"
              selectorClassName={styles['select-wrapper']}
              elements={['Crime', 'Documentary', 'Horror', 'Comedy']}
              selected={selectedGenres}
              onSelected={onGenreSelectedHandler}></MultiSelectDropdown>
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
        <button type="reset" onClick={onFormResetHandler}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default MovieItemForm;
