import React, { useState, useEffect } from "react";
import login from "../../login.json";
import Home from "../Home/Home";
import { PAGE } from "../../Constants";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [page, setPage] = useState(PAGE.LOGIN);
  const [role, setRole] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const redirect = (url) => window.history.replaceState(null, null, url);
  useEffect(() => {
    redirect(page);
  });
  const handleSubmit = (e) => {
    const validateEmail = login.find((e) => e.email === formData.email);
    const validatePassword = validateEmail.password === formData.password;
    e.preventDefault();
    setRole(validateEmail.role);
    setCurrentUser(validateEmail);
    return validateEmail && validatePassword
      ? (redirect(PAGE.HOME), setPage(PAGE.HOME))
      : setPage(page);
  };
  const handleChange = (input) => (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };
  return (
    <div>
      {page === PAGE.LOGIN && (
        <div class="center">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label>Email ID:</label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleChange("email")}
              />
            </div>
            <div>
              <label>password:</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange("password")}
              />
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      )}
      {page === PAGE.HOME && <Home role={role} currentUser={currentUser} />}
    </div>
  );
};

export default Login;
