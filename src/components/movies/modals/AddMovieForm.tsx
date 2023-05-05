import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../ui/modal/Modal';
import MovieItemForm from '../movieItem/MovieItemForm';
import { Movie } from '../../../models/movie';
import { createMovie } from '../../../services/movieService';

const AddMovieForm: FC = (): ReactElement => {
  const navigate = useNavigate();

  const onAddMovie = async (movie: Movie): Promise<void> => {
    await createMovie(movie);
    navigate(-1);
  };

  return (
    <Modal title="Add Movie" open={true} width={600} onClose={(): void => navigate(-1)}>
      <MovieItemForm onSubmit={onAddMovie}></MovieItemForm>
    </Modal>
  );
};

export default AddMovieForm;
