import React, { FC, ReactElement } from 'react';
import ContextMenuIcon from './ContextMenuIcon';
import styles from './ContextMenu.module.css';

interface ContextMenuProps {
  isOpen?: boolean;
  onEdit(): void;
  onOpenChanged(): void;
}

const ContextMenu: FC<ContextMenuProps> = ({ isOpen = false, onOpenChanged, onEdit }): ReactElement => {
  const onMenuClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    onOpenChanged();
  };

  return (
    <>
      {!isOpen && (
        <button role="button" className={styles.menu} onClick={onMenuClickHandler}>
          <span className={styles.icon}>
            <ContextMenuIcon></ContextMenuIcon>
          </span>
        </button>
      )}
      {isOpen && (
        <ul className={styles.menu}>
          <li className={styles.close}>
            <button onClick={onMenuClickHandler}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="button"
                aria-label="close">
                <path
                  d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
                  fill="currentColor"></path>
              </svg>
            </button>
          </li>
          <li
            onClick={(e: React.MouseEvent<HTMLLIElement>) => {
              e.stopPropagation();
              onEdit();
            }}>
            Edit
          </li>
          <li>Delete</li>
        </ul>
      )}
    </>
  );
};

export default ContextMenu;

// export type ContextMenuType = {
//   closeMenu(): void;
// };

// const ContextMenu = forwardRef<ContextMenuType>(function ContextMenu(_, ref): ReactElement {
//   const [menuOpen, setMenuOpen] = useState(false);

//   useImperativeHandle(ref, () => {
//     return { closeMenu: () => setMenuOpen(false) };
//   });

//   const onMenuClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
//     e.stopPropagation();
//     setMenuOpen(prev => !prev);
//   };

//   return (
//     <>
//       {!menuOpen && (
//         <button role="button" className={styles.menu} onClick={e => onMenuClickHandler(e)}>
//           <span className={styles.icon}>
//             <ContextMenuIcon></ContextMenuIcon>
//           </span>
//         </button>
//       )}
//       {menuOpen && (
//         <ul className={styles.menu}>
//           <li className={styles.close}>
//             <button onClick={e => onMenuClickHandler(e)}>
//               <svg
//                 width="15"
//                 height="15"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 role="button"
//                 aria-label="close">
//                 <path
//                   d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
//                   fill="currentColor"></path>
//               </svg>
//             </button>
//           </li>
//           <li>Edit</li>
//           <li>Delete</li>
//         </ul>
//       )}
//     </>
//   );
// });

// const ContextMenu = forwardRef<HTMLElement, ContextMenuProps>(
//   ({ isOpen }: ContextMenuProps, ref: React.ForwardedRef<HTMLElement>): ReactElement => {
//     const [menuOpen, setMenuOpen] = useState(isOpen === undefined ? false : isOpen);

//     const onMenuClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
//       e.stopPropagation();
//       setMenuOpen(prev => !prev);
//     };
//     return (
//       <>
//         {!menuOpen && (
//           <button role="button" className={styles.menu} onClick={e => onMenuClickHandler(e)}>
//             <span className={styles.icon}>
//               <ContextMenuIcon></ContextMenuIcon>
//             </span>
//           </button>
//         )}
//         {menuOpen && (
//           <ul className={styles.menu}>
//             <li className={styles.close}>
//               <button onClick={e => onMenuClickHandler(e)}>
//                 <svg
//                   width="15"
//                   height="15"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   role="button"
//                   aria-label="close">
//                   <path
//                     d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
//                     fill="currentColor"></path>
//                 </svg>
//               </button>
//             </li>
//             <li>Edit</li>
//             <li>Delete</li>
//           </ul>
//         )}
//       </>
//     );
//   },
// );
