import Dashboard from "../../components/Dashboard";
import { faDashboard, faListSquares } from "@fortawesome/free-solid-svg-icons";
import SideMenu from "../../components/SideMenu";
import logo from "../../assets/logoW.png";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div>
      <section className="sideMenu">
        <div className="logo">
          <Link
            to="/"
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 20,
            }}
          >
            <img src={logo} alt="Culture Trail Logo" className="App-logo" />
          </Link>
        </div>
        <div className="items">
        <SideMenu to="/admin" icon={faDashboard} label="Dashboard" />
        <SideMenu to="/admin/orders" icon={faListSquares} label="Orders" />
        </div>
      </section>
      <Dashboard />
    </div>
  );
}
