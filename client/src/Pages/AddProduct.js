import { faBox, faDashboard, faGear, faListSquares, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import logo from "../assets/logoW.png";

export function AddProducts() {
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
        
                {/* <div className="card mb-4">
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
                                    <label for="validationCustom01">Product title</label>
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Type here"
                                        ref={itemName} required />
                                    <div className="valid-feedback">Looks good!</div>
                                </div>
                                <div className="col">
                                    <label for="validationCustom01">Product description</label>
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Type here"
                                        ref={description} required />
                                    <div className="valid-feedback">Looks good!</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label for="validationCustom01">Quantity</label>
                                    <input type="number" className="form-control" id="validationCustom01" placeholder="0"
                                        ref={quantity} required />
                                    <div className="valid-feedback">Looks good!</div>
                                </div>
                                <div className="col">
                                    <label for="validationCustom01">Image</label>
                                    <input type="file" className="form-control" id="validationCustom01" placeholder="0.00"
                                        onChange={(e) => convertToBase64(e)} ref={imageInputRef} required />
                                    <div className="valid-feedback">Looks good!</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label for="validationCustom01">Unit Price</label>
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="0.00"
                                        ref={price} required />
                                    <div className="valid-feedback">Looks good!</div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label for="validationCustom01">Discount</label>
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="0.00"
                                        ref={discount} required />
                                    <div className="valid-feedback">Looks good!</div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div> */}
            </section>
        </div>
    );
}