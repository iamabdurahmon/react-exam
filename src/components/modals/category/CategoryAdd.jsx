import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./categoryAdd.css";
import axios from "axios";

const CategoryAdd = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [title, setTitle] = useState("");
  const [Imageurl, setImageurl] = useState("");

  async function post(data) {
    let res = await axios.post("http://localhost:5000/categories", data);
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Add Category</h2>
          <button className="close-btn" onClick={onClose}>
            <IoCloseOutline />
          </button>
        </div>

        <div className="modal-body">
          <div className="input-group">
            <label>Category Name</label>
            <input
              type="text"
              placeholder="Women Clothes"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="input-group">
            <label>Category Image url</label>
            <input
              type="text"
              placeholder="Image url"
              onChange={(e) => {
                setImageurl(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn-create"
            onClick={() => {
              post({
                id: Date.now(),
                image: Imageurl,
                title: title,
                items_count: "12",
              });

              onClose();
            }}
          >
            Create Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryAdd;
