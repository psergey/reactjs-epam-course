import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

describe('search component tests', () => {
  it('should match to snaphot', () => {
    const query = 'Doctor Who';
    const searchFn = jest.fn();
    const { asFragment } = render(<Search query={query} onSearch={() => searchFn} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component with provided search qriteria', () => {
    const query = 'Doctor Who';
    const searchFn = jest.fn();
    const { getByRole } = render(<Search query={query} onSearch={() => searchFn} />);

    const input = getByRole('textbox');

    expect(input).toHaveValue(query);
  });

  it('should pass search criteria by clicking on search button', async () => {
    const query = 'Doctor Who';
    const searchFn = jest.fn();
    const { getByRole } = render(<Search onSearch={(searchCriteria: string): void => searchFn(searchCriteria)} />);

    const input = getByRole('textbox');
    const btn = getByRole('button');

    await userEvent.type(input, query);
    await userEvent.click(btn);

    expect(searchFn).toHaveBeenCalledWith(query);
  });

  it('should pass search criteria by pressing enter on search textbox', async () => {
    const query = 'Doctor Who';
    const searchFn = jest.fn();
    const { getByRole } = render(<Search onSearch={(searchCriteria: string): void => searchFn(searchCriteria)} />);

    const input = getByRole('textbox');

    await userEvent.type(input, query);
    input.focus();
    await userEvent.keyboard('{enter}');

    expect(searchFn).toHaveBeenCalledWith(query);
  });
});
