// Modal.js
import React from "react";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

const Modal = ({ show, onClose, children }) => {
  return (
    <>
      {show ? (
        <div className={s.modalBackdrop}>
          <div className={s.modalContent}>
            <button className={s.modalClose} onClick={onClose}>
              &times;
            </button>
            <div className={s.modalBody}>{children}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
