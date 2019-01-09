import React from "react";
import PropTypes from "prop-types";

// Example Button:
// <button
//   className="btn btn-info"
//   data-toggle="modal"
//   data-target={`#modal-${props.id}`}
// >
//   Open
// </button>;

const Modal = props => (
  <div
    className="modal fade"
    id={`modal-${props.id}`}
    tabIndex="-1"
    role="dialog"
    aria-labelledby={`modal-${props.id}`}
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">{props.children}</div>
    </div>
  </div>
);

Modal.propTypes = {
  id: PropTypes.string.isRequired
};

export default Modal;
