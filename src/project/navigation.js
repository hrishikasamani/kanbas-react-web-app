import { Link, useLocation } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import '../users/styles.css';
function Navigation () {
    const links = ["home","search","signin","signup","account"];
    const { pathname } = useLocation();
    return (
        <div className="list-group">
        {links.map((link, index) => (
        <Link
          key={index}
          to={`/project/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>  
          <br />
          {link}
        </Link>
      ))}
        </div>
    );
};

export default Navigation;