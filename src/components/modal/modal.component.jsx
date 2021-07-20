import "./modal.styles.scss";
import ReactDOM from "react-dom";

function Modal({ isClosed, onClose, children }) {
  if (isClosed) {
    return null;
  }
  return ReactDOM.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
