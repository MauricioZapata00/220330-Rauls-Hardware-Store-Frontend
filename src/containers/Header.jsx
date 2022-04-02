import React from "react";
import { NavLink } from "react-router-dom";
import IndexImage from "../assets/img/logo.jpg"

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <img src={IndexImage} alt="Home" width="50" height="50" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/operations" className="nav-link">Operaciones</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/alarms" className="nav-link">Alarmas</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;