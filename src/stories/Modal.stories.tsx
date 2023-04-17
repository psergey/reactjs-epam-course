import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from '../components/ui/modal/Modal';
import MovieItemForm from '../components/movies/movieItem/MovieItemForm';

export default {
  title: 'UI/Modal component',
  component: Modal
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args}>{args.children}</Modal>;

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  width: 600,
  children: <div>This is modal dialog content</div>
};

export const AddMovieModal = Template.bind({});
AddMovieModal.args = {
  title: 'Add Movie',
  width: 700,
  children: (
    <MovieItemForm
      onSubmit={() => {
        undefined;
      }}></MovieItemForm>
  )
};
