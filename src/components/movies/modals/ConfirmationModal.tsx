import { FC, ReactElement, useState } from 'react';
import Modal from '../../ui/modal/Modal';
import styles from './ConfirmationModal.module.css';

interface IConfirmationModal {
  title: string;
  text: string;
  open: boolean;
  onConfirm(): void;
  onCancel(): void;
}

const ConfirmationModal: FC<IConfirmationModal> = ({ title, text, open, onCancel, onConfirm }): ReactElement => {
  const [isOpen, setIsOpen] = useState(open);

  const onCloseHandler = () => {
    setIsOpen(false);
    onCancel();
  };

  const onConfirmHandler = () => {
    setIsOpen(false);
    onConfirm();
  };

  return (
    <Modal title={title} open={isOpen} onClose={onCloseHandler}>
      <div>
        <div>{text}</div>
        <div className={styles.actions}>
          <button type="submit" onClick={onConfirmHandler}>
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
