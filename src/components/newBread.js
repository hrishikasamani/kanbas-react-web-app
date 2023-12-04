import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./Breadcrumbs.css";
import { FaBars } from "react-icons/fa";

export default function NewBread() {
    const location = useLocation()
    let currentlink = ''

    return(
        <div className="NewBread">
        <FaBars className="wd-icon" />
            {location}
        </div>
    )
}