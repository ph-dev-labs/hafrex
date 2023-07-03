import React from "react";
import "./Modal.css";

function Modal(props) {
  const { onClose } = props;

  const closeModal = () => {
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
