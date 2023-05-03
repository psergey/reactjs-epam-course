import { FC, ReactElement } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import Modal from '../../ui/modal/Modal';
import MovieItemForm from '../movieItem/MovieItemForm';

const AddMovieForm: FC = (): ReactElement => {
  const context = useOutletContext<any>();
  const navigate = useNavigate();

  return (
    <Modal open={context.isOpen} width={600} onClose={(): void => navigate(-1)}>
      <MovieItemForm onSubmit={context.onAddMovie}></MovieItemForm>
    </Modal>
  );
};

export default AddMovieForm;
