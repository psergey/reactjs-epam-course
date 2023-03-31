import { FC, ReactElement, useState } from 'react';
import styles from './Dropdown.module.css';

interface DropdownProps {
  elements: any[];
  selected: any;
  onSelected(item: any): void;
}

const Dropdown: FC<DropdownProps> = ({ elements, selected, onSelected }): ReactElement => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(elements.find(item => item === selected));

  const onClickHandlder = () => {
    setOpen(prev => !prev);
  };

  const onItemSelectedHandler = (item: string) => {
    setOpen(false);
    setSelectedItem(item);
    onSelected(item);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.select} ${isOpen ? styles.open : ''}`}>
        <div className={styles.toggler} onClick={onClickHandlder}>
          <span>{selectedItem}</span>
          <div className={`${styles.arrow}`}></div>
        </div>
        {isOpen && (
          <ul>
            {elements.map(item => (
              <li key={item} className={styles.item} onClick={() => onItemSelectedHandler(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
