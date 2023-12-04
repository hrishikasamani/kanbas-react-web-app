import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css';
function Search() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  return (
    <div className="search">
      <h2>Search</h2>
      My name is Hrishika Samani and I have made this website using ReactJS and MongoDB.
      Thank you.
    </div>
  );
}
export default Search;