import { FC, ReactElement } from 'react';
import Dropdown from '../dropdown/Dropdown';
import styles from './MovieSort.module.css';

interface MovieSortProps {
  elements: string[];
  selected: string;
  onSelectionChanged(selected: string): void;
}

const MovieSort: FC<MovieSortProps> = ({ elements, selected, onSelectionChanged }): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>Sort By</div>
      <div className={styles.dropdown}>
        <Dropdown
          elements={elements}
          selected={selected}
          onSelected={function (item: any): void {
            onSelectionChanged(item);
          }}></Dropdown>
      </div>
    </div>
  );
};

export default MovieSort;
