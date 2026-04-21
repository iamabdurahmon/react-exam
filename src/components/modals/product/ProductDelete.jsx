import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./productDelete.css";

const ProductDelete = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Delete Item</h2>
          <button className="close-btn" onClick={onClose}>
            <IoCloseOutline />
          </button>
        </div>

        <div className="modal-body">
          <p>Are you sure you want to delete this item?</p>
        </div>

        <div className="modal-footer">
          <button className="btn-cancel-text" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-delete-main" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDelete;
