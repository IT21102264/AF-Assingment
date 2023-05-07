import { Link } from "react-router-dom";
import DashWrapper from "../../components/DashWrapper";
import SideMenu from "../../components/SideMenu";
import logo from "../../assets/logoW.png";
import { faBox, faDashboard, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Seller() {
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
          <SideMenu to="/seller" icon={faDashboard} label="Dashboard" />
          <SideMenu to="/seller/product" icon={faBox} label="Products" />
        </div>
      </section>
      <DashWrapper />
    </div>
  );
}
