import React from 'react';
import Modal from 'react-modal';

const EditModal = props => {
  return (
    <Modal isOpen={props.isOpen}>
      <h3>Modal Test</h3>
      <button className="button" onClick={props.closeModal}>
        Close
      </button>
    </Modal>
  );
};

export default EditModal;
