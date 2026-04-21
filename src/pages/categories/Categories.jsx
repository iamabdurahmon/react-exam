import React, { useState, useEffect } from "react";
import "./categories.css";
import { IoAddSharp } from "react-icons/io5";
import axios from "axios";
import { FiEdit3 } from "react-icons/fi";
import emptyImg from "../../assets/images/category-img.svg";
import CategoryAdd from "../../components/modals/category/CategoryAdd";

const Categories = () => {
  const [categories, setProducts] = useState([]);
  const [toggleRefresh, setToggleRefresh] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }, [isModalOpen]);

  return (
    <div className="category-wrapper">
      {/* show when data does not exist */}
      <div className="category-empty">
        <h1>Category</h1>

        {/* empty data */}
        <div className="empty-info">
          <img src={emptyImg} alt="image" />
          <h3>Create First Category</h3>
          <p>
            Organize all your items in stock by creating and adding them to
            categories. <br /> Categories helps to find items faster for your
            customers.
          </p>
          <button>
            <IoAddSharp />
            Add Product
          </button>
        </div>
      </div>

      {/* show when data exists */}
      <div className="category">
        {/* category top */}
        <div className="category-top">
          <h1>Products</h1>
          <button onClick={() => setIsModalOpen(true)}>
            <IoAddSharp />
            Add Product
          </button>
        </div>

        {/* category product cards */}
        <div className="category-cards">
          {categories.map((item) => (
            /* category card */
            <div className="category-card" key={item.id}>
              <div className="card-image">
                <img src={item.image} alt={item.title} />

                {/* card hover */}
                <div className="card-hover">
                  <span>
                    <FiEdit3 />
                    Edit
                  </span>
                </div>
              </div>
              <div className="category-card-desc">
                <h1>{item.title}</h1>
                <p>{item.items_count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* category modal */}
      <CategoryAdd isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Categories;
