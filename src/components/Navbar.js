import React from "react";
import logo from "../assets/logo.png";

import resume from "../assets/hanh-le-resume.pdf";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/Home"><img className="logo" src={logo} alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href={resume}>My Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/WebDevelopment">Past Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
