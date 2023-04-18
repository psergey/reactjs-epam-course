import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from '../components/ui/modal/Modal';
import { MovieAdd, MovieEdit } from './MovieItemForm.stories';

export default {
  title: 'UI/Modal component',
  component: Modal
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = (): void => {
    setIsOpen(true);
  };

  const onCloseHandler = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={onClickHandler}>Open Modal</button>
      <Modal {...args} open={isOpen} onClose={onCloseHandler}>
        {args.children}
      </Modal>
    </>
  );
};

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
    <MovieAdd
      {...MovieAdd.args}
      onSubmit={() => {
        null;
      }}
    />
  )
};

export const EditMovieModal = Template.bind({});
EditMovieModal.args = {
  title: 'Edit Movie',
  width: 700,
  children: (
    <MovieEdit
      {...MovieEdit.args}
      onSubmit={() => {
        null;
      }}
    />
  )
};
