import { Box, Button, Flex, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../redux/authactions";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function LoginPage() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const { auth, token, role, username: user } = useSelector((state) => state);
  const dispatch = useDispatch();

  //console.log(auth, token, role, user);

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      ></div>
      <div className="login-c">
        <form className="form">
          <h3 className="text-center mb-4">Sign In</h3>

          <div className="mb-3">
            <div className="form-field">
              <label>Username</label>
              <input
                value={username}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <div className="form-field">
              <label>Password</label>
              <input
                type={"password"}
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </div>

          <p className="forgot-password text-center">
            Don't have an account yet?
            <Link to={"/signup"} onClick={(e) => {}}>
              Register Now
            </Link>
          </p>

          <Button
            onClick={async () => {
              try {
                let user = {
                  username: username,
                  password: password,
                };
                let data = await axios.post(
                  "http://localhost:5000/user/login",
                  user
                );

                dispatch(
                  Login({
                    token: data.data.token,
                    username: data.data.userDetails.username,
                    role: data.data.userDetails.role,
                  })
                );
                alert("Login Sucessful")
              } catch (error) {
                console.log(error);
                alert("Failed to Login. Please try again later.");
              }
            }}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}