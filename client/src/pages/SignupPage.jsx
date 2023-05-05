import { Box, Input, Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export default function SignupPage() {
  let [email, setEmail] = useState("");
  let [role, setRole] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [cpassword, setCpassword] = useState("");
  let [location, setLocation] = useState("");
  let [dob, setDob] = useState("");

  return (
    <Box mt="60px">
      <Flex gap={6} alignItems={"center"} direction={"column"} w="40%" m="auto">
        <Input
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        ></Input>
        <Input
          type={"email"}
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <select onChange={(e) => setRole(e.target.value)}>
          <option value={""}>Select Role</option>
          <option value={"admin"}>Admin</option>
          <option value={"user"}>User</option>
        </select>

        <Input
          value={location}
          placeholder="location"
          onChange={(e) => setLocation(e.target.value)}
        ></Input>
        <Input
          type={"password"}
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Input
          type={"password"}
          value={cpassword}
          placeholder="confirm password"
          onChange={(e) => setCpassword(e.target.value)}
        ></Input>
        <Input
          type={"date"}
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        ></Input>
        <Button
          onClick={async () => {
            try {
              if (cpassword != password) {
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
                "http://localhost:4000/user/register",
                user
              );
              console.log(data);
            } catch (error) {
              console.log(error);
              alert("Failed to register. Please try again later.");
            }
          }}
        >
          Signup
        </Button>
      </Flex>
    </Box>
  );
}
