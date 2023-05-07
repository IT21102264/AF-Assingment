import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DisplayProduct() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
      function getProducts() {
          axios.get("http://localhost:4000/product/").then((res)=>{
              setProducts(res.data);
          }).catch((err)=>{
              alert(err.message);
          });
      }
      getProducts();
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title text-center mb-60px">
            <h2>Discover Products</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="tab-content mt-60px">
            <div className="tab-pane fade show active">
              <div className="row">
                {products.map((product) => (
                  <div
                    key={product._id}
                    className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px"
                  >
                    <div className="product">
                      <div className="thumb">
                        <Link className="image">
                          <img src={product.image} alt={product.productName} />
                        </Link>
                      </div>
                      <div className="content">
                        <span className="ratings">
                          <span className="ratings-wrap">
                            <span className="star"></span>
                          </span>
                          <span className="rating-num">(5 Review)</span>
                        </span>
                        <h5 className="title">{product.productName}</h5>
                        <span className="price">
                          <span className="new">LKR {product.price}</span>
                        </span>
                        <span className="title">{product.quantity} In Stock</span>
                      </div>
                      <button className="add-to-cart">Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
