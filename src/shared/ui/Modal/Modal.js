import classes from './Modal.module.scss';

/**
 * @typedef {import('./types').ModalProps} ModalProps
 */

/**
 * @function Modal
 * @param {ModalProps} props
 * @returns {JSX.Element}
 */

export const Modal = (props) => {
  const { onClose, children } = props;

  return (
    <div className={classes.overlay} onClick={onClose}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <button className={classes.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

