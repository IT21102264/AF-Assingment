import { faBox, faDashboard, faGear, faListSquares, faPenToSquare, faPlus, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import logo from "../assets/logoW.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';

export function Products() {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleEditClick = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleFormSubmit = (updatedProduct) => {
        axios.put(`http://localhost:5000/product/${updatedProduct._id}`, updatedProduct)
          .then((res) => {
            // Update the products list with the updated product
            const updatedProducts = products.map((product) => {
              if (product._id === res.data._id) {
                return res.data;
              }
              return product;
            });
            setProducts(updatedProducts);
            // Close the modal
            setShowModal(false);
          })
          .catch((err) => {
            alert(err.message);
          });
    };

    useEffect(()=>{
        function getProducts() {
            axios.get("http://localhost:5000/product/").then((res)=>{
                setProducts(res.data);
            }).catch((err)=>{
                alert(err.message);
            });
        }
        getProducts();
    }, [])

    return (
        <div>
            <section className="sideMenu">
                <div className="logo">
                    <Link to="/" style={{display: "flex", justifyContent: "center", paddingTop: 20,}}>
                        <img src={logo} alt="Culture Trail Logo" className="App-logo" />
                    </Link>
                </div>
                <div className="items">
                    <SideMenu to="/admin" icon={faDashboard} label="Dashboard" />
                    <SideMenu to="/admin/products" icon={faBox} label="Products" />
                    <SideMenu to="/admin/orders" icon={faListSquares} label="Orders" />
                    <SideMenu to="/admin/adminprofile" icon={faUser} label="Profile" />
                    <SideMenu to="/admin/users" icon={faUsers} label="Users" />
                    <SideMenu to="/admin/settings" icon={faGear} label="Settings" />
                </div>
            </section>
            <section className="main-wrap">
                <div className="content-main" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <h2>Products</h2>
                        <p>Manage your products here</p>
                    </div>
                    <div>
                    <Link className="btn btn-primary" to={"/admin"}> Back </Link>
                    </div>
                </div>
        
                <div className="card mb-4">
                    <header className="card-header">
                        <h4>Product List</h4>
                        <div>
                            <Link className="btn btn-success" to={"/admin/addProducts"}>
                                <FontAwesomeIcon icon={faPlus} /> Add Products
                            </Link>
                        </div>
                    </header>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>#ID</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Unit Price</th>
                                    <th>Discount Price</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {products.map((product, index) => (
                                        <tr key={index}>
                                            <td>{product._id.slice(-4)}</td>
                                            <td>{product.productName}</td>
                                            <td>
                                                <img src={product.image} style={{width:"50px", height:"50px"}} alt={product.productName} />
                                            </td>
                                            <td>{product.description}</td>
                                            <td>{product.quantity}</td>
                                            <td>{product.price}</td>
                                            <td>{product.discount}</td>
                                            <td>
                                                <button onClick={() => handleEditClick(product)}>
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* Render the modal */}
                            <Modal show={showModal} onHide={() => setShowModal(false)}>
                                <Modal.Header closeButton>
                                <Modal.Title>Edit Product</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                {/* Render the product update form */}
                                <UpdateForm product={selectedProduct} onSubmit={handleFormSubmit} />
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function UpdateForm({ product, onSubmit }) {
    const [productName, setProductName] = useState(product?.productName || '');
    const [description, setDescription] = useState(product?.description || '');
    const [quantity, setQuantity] = useState(product?.quantity || '');
    const [price, setPrice] = useState(product?.price || '');
    const [discount, setDiscount] = useState(product?.discount || '');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const updatedProduct = {
        _id: product._id,
        productName,
        description,
        quantity,
        price,
        discount,
      };
      onSubmit(updatedProduct);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label> Product Name:
            <input className="col-md-4 mb-3" type="text" value={productName} onChange={(event) => setProductName(event.target.value)} />
          </label>
          <label> Description:
            <input className="col-md-4 mb-3" type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
          </label>
          <label> Quantity:
            <input className="col-md-4 mb-3" type="text" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
          </label>
          <label> Price:
            <input className="col-md-4 mb-3" type="text" value={price} onChange={(event) => setPrice(event.target.value)} />
          </label>
          <label> Discount:
            <input className="col-md-4 mb-3" type="text" value={discount} onChange={(event) => setDiscount(event.target.value)} />
          </label>
        </div>
        <input className="btn btn-success" type="submit" value="Submit" />
      </form>
    )
}