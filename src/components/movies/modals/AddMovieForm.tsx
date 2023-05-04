import { FC, ReactElement, useEffect, useState } from 'react';
import { useOutletContext, useNavigate, useParams } from 'react-router-dom';
import Modal from '../../ui/modal/Modal';
import MovieItemForm from '../movieItem/MovieItemForm';
import { Movie } from '../../../models/movie';
import { createMovie, getMovie, updateMovie } from '../../../services/movieService';

const AddMovieForm: FC = (): ReactElement => {
  //const context = useOutletContext<any>();
  const [movie, setMovie] = useState<Movie>();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const isAddMode = !movieId;

  useEffect(() => {
    if (!isAddMode) {
      const fetchData = async () => {
        const item = await getMovie(movieId);
        setMovie(item);
      };

      fetchData();
    }
  }, []);

  const onAddMovie = async (movie: Movie): Promise<void> => {
    await createMovie(movie);
    navigate(-1);
  };

  const onUpdateMovie = async (movie: Movie): Promise<void> => {
    await updateMovie(movie);
    navigate(-1);
  };

  return (
    <Modal title={isAddMode ? 'Add Movie' : 'Edit Movie'} open={true} width={600} onClose={(): void => navigate(-1)}>
      <MovieItemForm
        id={movie?.id}
        name={movie?.title}
        posterUrl={movie?.posterUrl}
        releaseDate={movie?.releaseDate}
        rating={movie?.rating}
        duration={movie?.duration}
        description={movie?.description}
        genres={movie?.genres}
        onSubmit={isAddMode ? onAddMovie : onUpdateMovie}></MovieItemForm>
    </Modal>
  );
};

export default AddMovieForm;
