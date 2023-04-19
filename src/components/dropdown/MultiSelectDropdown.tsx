import { FC, ReactElement, useState } from 'react';
import styles from './Dropdown.module.css';

interface DropdownProps {
  placeholder: string;
  elements: any[];
  selected: any[];
  onSelected(item: any): void;
  selectorClassName?: string;
  itemsClassName?: string;
}

const MultiSelectDropdown: FC<DropdownProps> = ({
  placeholder,
  elements,
  selected,
  selectorClassName,
  itemsClassName,
  onSelected
}): ReactElement => {
  const [isOpen, setOpen] = useState(false);
  //const [selectedItem, setSelectedItem] = useState(elements.find(item => item === selected));
  //const [selectedItem, setSelectedItem] = useState<string[]>([]);

  const onClickHandlder = () => {
    setOpen(prev => !prev);
  };

  const onItemSelectedHandler = (item: string) => {
    //setOpen(false);
    // setSelectedItem(prev => {
    //   const items = [...prev];
    //   if (items.includes(item)) {
    //     return items.filter(el => el !== item);
    //   } else {
    //     items.push(item);
    //     return items;
    //   }
    // });
    onSelected(item);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.select} ${isOpen ? styles.open : ''}`}>
        <div className={`${styles.toggler} ${styles.normal} ${selectorClassName}`} onClick={onClickHandlder}>
          <span>{selected.length > 0 ? `${selected.length} options selected` : placeholder}</span>
          <div className={`${styles.arrow}`}></div>
        </div>
        {isOpen && (
          <ul className={`${itemsClassName}`}>
            {elements.map(item => {
              const isSelected = selected.includes(item);
              return (
                <li
                  key={item}
                  className={`${styles.item} ${styles.normal}`}
                  onClick={() => onItemSelectedHandler(item)}>
                  <input type="checkbox" checked={isSelected} readOnly={true}></input>
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
