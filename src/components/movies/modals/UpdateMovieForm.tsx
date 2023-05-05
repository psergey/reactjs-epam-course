import { FC, ReactElement } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import Modal from '../../ui/modal/Modal';
import MovieItemForm from '../movieItem/MovieItemForm';
import { Movie } from '../../../models/movie';
import { updateMovie } from '../../../services/movieService';

const UpdateMovieForm: FC = (): ReactElement => {
  const navigate = useNavigate();
  const movie = useLoaderData() as Movie;

  const onUpdateMovie = async (movie: Movie): Promise<void> => {
    await updateMovie(movie);
    navigate(-1);
  };

  return (
    <Modal title="Edit Movie" open={true} width={600} onClose={(): void => navigate(-1)}>
      <MovieItemForm
        id={movie?.id}
        name={movie?.title}
        posterUrl={movie?.posterUrl}
        releaseDate={movie?.releaseDate}
        rating={movie?.rating}
        duration={movie?.duration}
        description={movie?.description}
        genres={movie?.genres}
        onSubmit={onUpdateMovie}></MovieItemForm>
    </Modal>
  );
};

export default UpdateMovieForm;
