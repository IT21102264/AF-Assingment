import { faBox, faDashboard, faGear, faListSquares, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import logo from "../assets/logoW.png";
import { useRef, useState } from "react";
import axios from "axios";

export function AddProducts() {

    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");

    const imageInputRef = useRef(null);

    function convertToBase64(e) {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => setImage(reader.result);
        reader.onerror = (error) => console.log("error: ", error);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const newProduct = {productName, description, quantity, image, price, discount}

        axios.post("http://localhost:5000/product/addProducts", newProduct).then(()=>{
            alert("Success")
        }).catch(error =>{
            alert(error)
        })
    }

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
                        <p>Add new products</p>
                    </div>
                    <div>
                    <Link className="btn btn-primary" to={"/admin/products"}> Back </Link>
                    </div>
                </div>
        
                <div className="card mb-4">
                    <form onSubmit={(e) => onSubmitHandler(e)}>
                        <header className="card-header">
                            <h4>Product</h4>
                            <div>
                                <input className="btn btn-success" type="submit" value="Submit" />
                            </div>
                        </header>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="validationCustom01">Product title</label>
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Type here"
                                        onChange={(e)=>{setProductName(e.target.value);}} required />
                                    <div className="valid-feedback">Looks good!</div>
                                </div>
                                <div className="col">
                                    <label htmlFor="validationCustom01">Product description</label>
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Type here"
                                        onChange={(e)=>{setDescription(e.target.value);}} required />
                                    <div className="valid-feedback">Looks good!</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="validationCustom01">Quantity</label>
                                    <input type="number" className="form-control" id="validationCustom01" placeholder="0"
                                        onChange={(e)=>{setQuantity(e.target.value);}} required />
                                    <div className="valid-feedback">Looks good!</div>
                                </div>
                                <div className="col">
                                    <label htmlFor="validationCustom01">Image</label>
                                    <input type="file" className="form-control" id="validationCustom01" placeholder="0.00"
                                        onChange={(e) => convertToBase64(e)} ref={imageInputRef} required />
                                    <div className="valid-feedback">Looks good!</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="validationCustom01">Unit Price</label>
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="0.00"
                                        onChange={(e)=>{setPrice(e.target.value);}} required />
                                    <div className="valid-feedback">Looks good!</div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="validationCustom01">Discount</label>
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="0.00"
                                        onChange={(e)=>{setDiscount(e.target.value);}} required />
                                    <div className="valid-feedback">Looks good!</div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
