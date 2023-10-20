import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./Breadcrumbs.css";
import { FaBars } from "react-icons/fa";

export default function Breadcrumbs() {
    const location = useLocation()
    let currentlink = ''
    const [empty, kanbas, courses, crumbs] = location.pathname.split('/')
     .filter(crumb => crumb !== '')
     .map(crumb => {
        currentlink =+ '/${crumb}'
        return (
            <div className= "crumb" key={crumb}>
                <Link to={currentlink}>{crumb}</Link>
            </div>
        )
     })

    return(
        <div className="breadcrumbs">
        <FaBars className="wd-icon" />
            {courses}{crumbs}
        </div>
    )
}