import React from 'react';

type ModalProps = {
  open: boolean;
  onClose: (ind: boolean) => void;
};

export const Modal: React.FC<ModalProps> = ({ open, onClose }) => {
  if (!open) {
    return null;
  }
  return (
    <div className='modal__div'>
      <strong>Спасибо за заказ</strong>
    </div>
  );
};
