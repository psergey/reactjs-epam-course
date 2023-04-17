import { FC, ReactElement } from 'react';
import Dropdown from '../dropdown/Dropdown';
import styles from './MovieSort.module.css';

interface MovieSortProps {
  selected: string;
  onSelectionChanged(selected: string): void;
}

const MovieSort: FC<MovieSortProps> = ({ selected, onSelectionChanged }): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>Sort By</div>
      <div className={styles.dropdown}>
        <Dropdown
          elements={['Release Date', 'Name']}
          selected={selected}
          onSelected={function (item: any): void {
            onSelectionChanged(item);
          }}></Dropdown>
      </div>
    </div>
  );
};

export default MovieSort;
