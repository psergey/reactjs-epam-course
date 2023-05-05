import ReactDOM, { FC, FormEvent, FormEventHandler, MouseEventHandler, ReactElement, useState } from 'react';
import {
  useForm,
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn
} from 'react-hook-form';
import styles from './MovieItemForm.module.css';
import MultiSelectDropdown from '../../dropdown/MultiSelectDropdown';
import { Movie } from '../../../models/movie';

interface MovieItem {
  id?: number;
  name?: string;
  posterUrl?: string;
  releaseDate?: Date;
  duration?: number;
  rating?: number;
  description?: string;
  genres?: string[];
  //genres?: string[];
  onSubmit(movie: Partial<Movie>): void;
}

interface IFormInput {
  name?: string;
  posterUrl?: string;
  releaseDate?: string;
  duration?: number;
  rating?: number;
  genres?: string[];
  description?: string;
}

const MovieItemForm: FC<MovieItem> = (props: MovieItem): ReactElement => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const defaultValue = {
    ...props,
    releaseDate: props.releaseDate?.toJSON().split('T', 1)[0],
    genres: props.genres ?? []
  };
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<IFormInput>({
    // values: {
    //   ...props,
    //   releaseDate: props.releaseDate?.toJSON().split('T', 1)[0],
    //   genres: props.genres ?? []
    // },
    values: defaultValue,
    defaultValues: defaultValue
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    //console.log(Object.fromEntries(new FormData(e.target as HTMLFormElement)));

    //props.onSubmit();
  };

  const onFormSubmit = (data: IFormInput): void => {
    props.onSubmit({
      ...data,
      id: defaultValue.id,
      title: data.name,
      releaseDate: data.releaseDate ? new Date(data.releaseDate) : undefined
    });
  };

  const onFormResetHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    //setSelectedGenres(defaultValue.genres);
    reset();
  };

  const onGenreSelectedHandler = (item: string) => {
    setSelectedGenres(prev => {
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
    <form onSubmit={handleSubmit(onFormSubmit)} className={styles.form}>
      <div className={styles.group}>
        <div className={styles['column-long']}>
          <label>Title</label>
          <div>
            <input placeholder="Title" {...register('name', { required: true })}></input>
            {errors.name?.type === 'required' && <p className={styles.error}>Title is required.</p>}
          </div>
        </div>
        <div className={styles.column}>
          <label>Release Date</label>
          <div>
            <input
              // defaultValue={props.releaseDate?.toJSON().split('T', 1)[0]}
              type="date"
              placeholder="Select Date"
              {...register('releaseDate')}></input>
          </div>
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles['column-long']}>
          <label>Movie Url</label>
          <div>
            <input
              // defaultValue={props.posterUrl}
              placeholder="https://"
              {...register('posterUrl', { required: true })}></input>
            {errors.posterUrl?.type === 'required' && <p className={styles.error}>Poster is required.</p>}
          </div>
        </div>
        <div className={styles.column}>
          <label>Rating</label>
          <div>
            <input
              // defaultValue={props.rating}
              type="number"
              // min={0}
              // max={10}
              step={0.1}
              placeholder="Rating"
              {...register('rating', { min: 0, max: 10 })}></input>
            {(errors.rating?.type === 'min' || errors.rating?.type === 'max') && (
              <p className={styles.error}>Rating should be between 0 and 10.</p>
            )}
          </div>
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles['column-long']}>
          <label>Genre</label>
          <div className={styles.select}>
            <Controller
              name={'genres'}
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <MultiSelectDropdown
                  placeholder="Select Genre"
                  selectorClassName={styles['select-wrapper']}
                  elements={['Crime', 'Documentary', 'Horror', 'Comedy']}
                  selected={value as any[]}
                  onSelected={e => {
                    const items = [...(value as any[])];
                    if (items.includes(e)) {
                      onChange(items.filter(el => el !== e));
                      return;
                    } else {
                      items.push(e);
                    }
                    onChange(items);
                  }}></MultiSelectDropdown>
              )}
            />
            {errors.genres?.type === 'required' && <p className={styles.error}>Select at least one genre.</p>}
          </div>
        </div>
        <div className={styles.column}>
          <label>Runtime</label>
          <div>
            <input
              type="number"
              min={0}
              step={1}
              // defaultValue={props.duration}
              placeholder="minutes"
              {...register('duration', { required: true })}></input>
            {errors.duration?.type === 'required' && <p className={styles.error}>Duration is required.</p>}
          </div>
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.description}>
          <label>Overview</label>
          <div>
            <textarea
              // defaultValue={props.description}
              placeholder="Description"
              {...register('description', { required: true })}></textarea>
            {errors.description && <p className={styles.error}>Overview is required.</p>}
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
