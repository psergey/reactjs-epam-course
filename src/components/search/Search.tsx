import { FC, ReactElement, useState } from 'react';
import styles from './Search.module.css';

interface SearchProps {
  query: string;
  onSearch(searchQuery: string): void;
}

const Search: FC<SearchProps> = ({ query, onSearch }): ReactElement => {
  const [searchQuery, setSearchQuery] = useState(query);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.currentTarget.value);
  };

  const onKeyPressedHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      onSearch(searchQuery);
    }
  };

  return (
    <>
      <input
        placeholder="What do you want to watch?"
        className={styles.search}
        value={searchQuery}
        onChange={event => onChangeHandler(event)}
        onBlur={() => onSearch(searchQuery)}
        onKeyDown={event => onKeyPressedHandler(event)}
      />
      <button className={styles.search} onClick={() => onSearch(searchQuery)}>
        Search
      </button>
    </>
  );
};

export default Search;
