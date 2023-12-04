import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css';
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/account");
  };
  return (
    <div className="signin">
      <h2>Signin</h2>
      <input className="form-control" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <input type="password" value={credentials.password} className="form-control"  onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <button className="form-control btn btn-primary" onClick={signin}> Sign In </button>
    </div>
  );
}
export default Signin;