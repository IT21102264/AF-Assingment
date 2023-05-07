import { useEffect, useState } from "react";
import axios from "axios";
import {
  faBox,
  faDashboard,
  faGear,
  faListSquares,
  faPlus,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import logo from "../assets/logoW.png";

export function Users() {
  const [users, setUsers] = useState([]);

  const removeUser = async (e, userId) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:5000/user/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
      alert("Sucessfuly removed");
    } catch (error) {
      console.error(error);
      alert("Error deleting user");
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/user/")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

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
          <SideMenu to="/admin/products" icon={faBox} label="Products" />
          <SideMenu to="/admin/orders" icon={faListSquares} label="Orders" />
          <SideMenu to="/admin/adminprofile" icon={faUser} label="Profile" />
          <SideMenu to="/admin/users" icon={faUsers} label="Users" />
          <SideMenu to="/admin/settings" icon={faGear} label="Settings" />
        </div>
      </section>
      <section className="main-wrap">
        <div
          className="content-main"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <h2>Users</h2>
            <p>Manage your Users here</p>
          </div>
          <div>
            <Link className="btn btn-primary" to={"/admin"}>
              {" "}
              Back{" "}
            </Link>
          </div>
        </div>

        <div className="card mb-4">
          <header className="card-header">
            <h4>User List</h4>
          </header>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>#ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th>Role</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id.slice(-4)}>
                      <td>{user._id}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.dob}</td>
                      <td>{user.role}</td>
                      <td>{user.location}</td>
                      <td>
                        <button
                          onClick={(e) => removeUser(e, user._id)}
                          style={{
                            padding: "8px 12px",
                            borderRadius: "4px",
                            border: "none",
                            fontSize: "16px",
                            fontFamily: "sans-serif",
                            cursor: "pointer",
                            backgroundColor: "#fff",
                            color: "#ff4d4f",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            float: "right",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#f1f1f1")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "#fff")
                          }
                        >
                          Remove User
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
