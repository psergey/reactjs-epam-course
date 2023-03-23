import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

const setup = (counter?: number) => {
  const content = counter === undefined ? render(<Counter />) : render(<Counter start={counter} />);
  const input = screen.getByRole('textbox');
  return {
    input,
    ...content
  };
};

describe('counter component tests', () => {
  it('should render component with default value', () => {
    const { input } = setup();

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('0');
  });

  it('should render component with provided value', () => {
    const { input } = setup(42);

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('42');
  });

  it('should increment value when click increase button', async () => {
    const { input, getByRole } = setup(41);
    const btn = getByRole('button', { name: 'Increase' });

    await userEvent.click(btn);

    expect(input).toHaveValue('42');
  });

  it('should decriment value when click decrease button', async () => {
    const { input, getByRole } = setup(43);
    const btn = getByRole('button', { name: 'Decrease' });

    await userEvent.click(btn);

    expect(input).toHaveValue('42');
  });
});
