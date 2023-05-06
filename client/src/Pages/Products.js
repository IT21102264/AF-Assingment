import { faBox, faDashboard, faGear, faListSquares, faPlus, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import logo from "../assets/logoW.png";

export function Products() {
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
                                    <th scope="col">Customer ID</th>
                                    <th scope="col">Order Date</th>
                                    <th scope="col">Total Price</th>
                                    <th scope="col">Order Status</th>
                                    <th scope="col" className="text-center">
                                    Action
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="col"></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-center" style={{ color: "blue" }}></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}