import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="signin">
      <h2>Sign Up</h2>
      {error && <div>{error}</div>}
      <input className="form-control"
        value={credentials.username}
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
      <input className="form-control" type="password"
        value={credentials.password}
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
      <button className="btn btn-primary w-100" onClick={signup}>
        Sign Up
      </button>
      Already have an account?
      <Link to={`/project/signin`}>
        Sign In
      </Link> now!!
    </div>
  );
}
export default Signup;