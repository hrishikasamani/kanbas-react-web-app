import { Link, useLocation } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { MdHome, MdSearch, MdOutlineSettings } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";
import { GrUserNew } from "react-icons/gr";
import '../users/styles.css';
function Navigation () {
    const links = ["home","search","signin","signup","account"];
    const linkToIconMap = {
      home: <MdHome className="wd-icon"/>,
      search: <MdSearch className="wd-icon" />,
      signin: <FaSignInAlt className="wd-icon"/>,
      signup: <GrUserNew className="wd-icon"/>,
      account: <MdOutlineSettings className="wd-icon"/>,
    }
    const { pathname } = useLocation();
    return (
        <div className="list-group">
        {links.map((link, index) => (
        <Link
          key={index}
          to={`/project/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
          {linkToIconMap[link]}  
          <br />
          {link}
        </Link>
      ))}
        </div>
    );
};

export default Navigation;