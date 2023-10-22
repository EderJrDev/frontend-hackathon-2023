import { X } from "@phosphor-icons/react";

const Modal = ({ isOpen, onClose, children }) => {
  const modalClass = isOpen ? "block" : "hidden";

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${modalClass}`}
    >
      <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
      <div
        className="modal-container bg-white w-115
       md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto relative"
      >
        <button
          className="modal-close absolute top-0 right-0 m-4 text-gray-700 hover:text-gray-900"
          onClick={onClose}
        >
          <X size={32} />
        </button>
        <div
          className="modal-content p-10
         text-center"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
