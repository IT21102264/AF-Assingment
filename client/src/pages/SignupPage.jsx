import { Input, Button } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function SignupPage() {
  let [email, setEmail] = useState("");
  let [role, setRole] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [cpassword, setCpassword] = useState("");
  let [location, setLocation] = useState("");
  let [dob, setDob] = useState("");

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="login-c">
          <form>
            <h3 className="text-center mb-4">Sign Up</h3>

            <div className="mb-3">
              <label>Username</label>
              <input
                value={username}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input
                type={"email"}
                value={email}
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Role</label>
              <select onChange={(e) => setRole(e.target.value)}>
                <option value={""}>Select Role</option>
                <option value={"admin"}>Admin</option>
                <option value={"user"}>User</option>
              </select>
            </div>
            <div className="mb-3">
              <label>Location</label>
              <input
                value={location}
                placeholder="location"
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type={"password"}
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Confirm Password</label>
              <input
                type={"password"}
                value={cpassword}
                placeholder="confirm password"
                onChange={(e) => setCpassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Date of Birth</label>
              <input
                type={"date"}
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>

            <Button
              onClick={async () => {
                try {
                  if (cpassword !== password) {
                    alert("Password not matching");
                    return;
                  }
                  let user = {
                    username: username,
                    password: password,
                    email: email,
                    role: role,
                    location: location,
                    dob: dob,
                  };
                  let data = await axios.post(
                    "http://localhost:5000/user/register",
                    user
                  );
                  alert("Registered successfully");
                } catch (error) {
                  console.log(error);
                  alert("Failed to register. Please try again later.");
                }
              }}
            >
              Signup
            </Button>

            <p className="forgot-password text-center">
              Already a member? <Link to={"/login"}>Login</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
