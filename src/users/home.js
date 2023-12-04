import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css';
function Home() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  return (
    <div className="home">
      <h2>Welcome to my Homepage!!</h2>
      My name is Hrishika Samani and I have made this website using ReactJS and MongoDB.
      Thank you.
    </div>
  );
}
export default Home;