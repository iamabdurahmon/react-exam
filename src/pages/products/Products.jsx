import React, { useState, useEffect } from "react";
import axios from "axios";
import "./products.css";
import ProductDelete from "../../components/modals/product/ProductDelete";

import emptyImage from "../../assets/images/products-img.svg";

import { IoAddSharp } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [isEdit, setIsEdit] = useState(false);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Men",
    image: "",
    inventory: "",
    color: "Black",
    price: "",
    rating: "5.0 (0 Votes)",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  const openDeleteModal = (id) => {
    setSelectedId(id);
    setIsDeleteOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteOpen(false);
    setSelectedId(null);
  };

  const handleDelete = () => {
    axios
      .delete("http://localhost:5000/products/" + selectedId)
      .then(() => {
        fetchData();
        closeDeleteModal();
      })
      .catch((err) => console.log("Error on delete:", err));
  };

  const openEditPage = (item) => {
    setNewProduct(item);
    setIsEdit(true);
    setIsAddOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSave = () => {
    if (isEdit == true) {
      axios
        .put("http://localhost:5000/products/" + newProduct.id, newProduct)
        .then(() => {
          fetchData();
          setIsAddOpen(false);
          setIsEdit(false);
          setNewProduct({
            name: "",
            category: "Men",
            image: "",
            inventory: "",
            color: "Black",
            price: "",
            rating: "5.0 (0 Votes)",
          });
        });
    } else {
      axios.post("http://localhost:5000/products", newProduct).then(() => {
        fetchData();
        setIsAddOpen(false);
        setNewProduct({
          name: "",
          category: "Men",
          image: "",
          inventory: "",
          color: "Black",
          price: "",
          rating: "5.0 (0 Votes)",
        });
      });
    }
  };

  return (
    <div className="product-wrapper">
      {!isAddOpen && (
        <>
          {products.length > 0 ? (
            /* visible when there is data */
            <div className="products">
              <div className="pro-top">
                <h1>Products</h1>
                <button
                  onClick={() => {
                    setIsAddOpen(true);
                    setIsEdit(false);
                  }}
                >
                  <IoAddSharp />
                  Add Product
                </button>
              </div>

              <div className="pro-products">
                <div className="pro-card">
                  <table className="pro-table">
                    <thead>
                      <tr>
                        <th>Products</th>
                        <th>Inventory</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <div className="pro-info">
                              <img src={item.image} alt="product" />
                              <div className="pro-list-title">
                                <span>{item.name}</span>
                                <p>{item.category}</p>
                              </div>
                            </div>
                          </td>
                          <td>{item.inventory}</td>
                          <td>{item.color}</td>
                          <td>{item.price}</td>
                          <td>{item.rating}</td>
                          <td>
                            <div className="pro-action">
                              <span onClick={() => openEditPage(item)}>
                                <FaUserEdit className="edit" />
                              </span>
                              <span onClick={() => openDeleteModal(item.id)}>
                                <RiDeleteBinLine className="delete" />
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            /* visible when there is no data */
            <div className="product-empty" style={{ display: "block" }}>
              <h1>Products</h1>
              <div className="pro-empty-info">
                <img src={emptyImage} alt="image" />
                <h3>Add Products</h3>
                <p>
                  Start making sales by adding your products. <br /> You can
                  import and manage your products at any time
                </p>
                <button onClick={() => setIsAddOpen(true)}>
                  <IoAddSharp />
                  Add Product
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {isAddOpen && (
        /* visible when add product button is clicked */
        <div className="product-add">
          <div className="add-header">
            <span
              onClick={() => setIsAddOpen(false)}
              style={{ cursor: "pointer" }}
            >
              <IoIosArrowRoundBack />
              Back
            </span>
            <h1>{isEdit ? "Edit Product" : "Add Product"}</h1>
          </div>

          <div className="add-content">
            <div className="add-main-form">
              <div className="form-card">
                <h3>Information</h3>
                <div className="input-group">
                  <label>Product Name</label>
                  <input
                    name="name"
                    value={newProduct.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Summer T-Shirt"
                  />
                </div>
                <div className="input-group">
                  <label>Product Description</label>
                  <textarea placeholder="Product description"></textarea>
                </div>

                <div className="input-group">
                  <label>Images URL</label>
                  <input
                    name="image"
                    value={newProduct.image}
                    onChange={handleChange}
                    type="text"
                    className="image-upload-placeholder"
                  />
                </div>

                <h3>Price</h3>
                <div className="price-inputs">
                  <div className="input-group">
                    <label>Product Price</label>
                    <input
                      name="price"
                      value={newProduct.price}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter price"
                    />
                  </div>
                  <div className="input-group">
                    <label>Inventory (Stock)</label>
                    <input
                      name="inventory"
                      value={newProduct.inventory}
                      onChange={handleChange}
                      type="text"
                      placeholder="10 in stock"
                    />
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button
                  className="btn-cancel"
                  onClick={() => setIsAddOpen(false)}
                >
                  Cancel
                </button>
                <button className="btn-save" onClick={handleSave}>
                  {isEdit ? "Update" : "Save"}
                </button>
              </div>
            </div>

            <div className="add-sidebar">
              <div className="form-card">
                <h3>Categories</h3>
                <div className="category-checkboxes">
                  {["Women", "Men", "T-Shirt", "Hoodie", "Dress"].map((cat) => (
                    <label key={cat} className="checkbox-item">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        onChange={handleChange}
                        checked={newProduct.category === cat}
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <ProductDelete
        isOpen={isDeleteOpen}
        onClose={closeDeleteModal}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Products;
