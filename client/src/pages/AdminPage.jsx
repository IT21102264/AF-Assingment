import { Link } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import logo from "../assets/logoW.png";
import { faBox, faDashboard, faGear, faListSquares, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Dashboard } from "../components/Dashboard";

export default function AdminPage() {
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
        <Dashboard />
    </div>
  );
}