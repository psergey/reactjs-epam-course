import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GenreSelector from './GenreSelector';

const genres: string[] = ['All', 'Horror', 'Si-Fi', 'Actions'];
const selectedGenre = 'Si-Fi';

describe('genre selection component tests', () => {
  it('should render component with provided genres', () => {
    const { getByRole } = render(
      <GenreSelector
        genres={genres}
        currentGenre="All"
        onSelected={() => {
          null;
        }}
      />
    );

    const items = genres.map(item => getByRole('button', { name: item }));

    items.forEach(button => expect(button).toBeInTheDocument());
    expect(items.length).toEqual(genres.length);
  });

  it('should highlight selected genre', () => {
    const { getByRole } = render(
      <GenreSelector
        genres={genres}
        currentGenre={selectedGenre}
        onSelected={() => {
          null;
        }}
      />
    );

    const button = getByRole('button', { name: selectedGenre });
    const span = button.lastElementChild;

    expect(button).toBeInTheDocument();
    expect(span).toBeInTheDocument();
    expect(span).toHaveClass('selected');
  });

  it('should pass selected genre by clicking on link', async () => {
    const genreSelected = jest.fn();
    const { getByRole } = render(
      <GenreSelector
        genres={genres}
        currentGenre={selectedGenre}
        onSelected={(genre: string): void => genreSelected(genre)}
      />
    );

    const button = getByRole('button', { name: selectedGenre });
    await userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(genreSelected).toBeCalledTimes(1);
    expect(genreSelected).toBeCalledWith(selectedGenre);
  });
});
