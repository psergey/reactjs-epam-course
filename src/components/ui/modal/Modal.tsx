import { FC, PropsWithChildren, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

interface IModal {
  title?: string;
  width?: number;
  open: boolean;
  onClose: () => void;
}

const portalElement = document.getElementById('overlay') as HTMLElement;

const ModalOverlay: FC<PropsWithChildren<IModal>> = (props): ReactElement => {
  return (
    <div className={styles.modal} style={{ width: props.width }}>
      <div className={styles.title}>
        <p>{props.title}</p>
        <button className={styles.close} onClick={props.onClose}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="button" aria-label="close">
            <path
              d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
              fill="currentColor"></path>
          </svg>
        </button>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

const Modal: FC<PropsWithChildren<IModal>> = (props): ReactElement => {
  return (
    <>
      {props.open ? (
        <>
          {createPortal(<div className={styles.backdrop}></div>, portalElement)}
          {createPortal(<ModalOverlay {...props}>{props.children}</ModalOverlay>, portalElement)}
        </>
      ) : null}
    </>
  );
};

export default Modal;
