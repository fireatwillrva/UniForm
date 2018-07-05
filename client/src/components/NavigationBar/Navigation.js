import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css";


function ButtonAppBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">UniForm</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" 
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="floatNav">
        {/* ===================================== */}
        {/* Home */}
        {/* ===================================== */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item" color="inherit" classNameName={
                    window.location.pathname === "/"
                    ? "nav-item active"
                    : "nav-item"}>
                    <Link to="/" classNameName="nav-link">
                        Home
                    </Link>
            </li>
        {/* ===================================== */}
        {/* Build Dropdown Menu */}
        {/* ===================================== */}
            <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Build
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/buildTemplate">Template</a>
          {/* CHANGE QUESTIONNAIRE HREF WHEN NEW ROUTE GETS MADE */}
          <a className="dropdown-item" href="/buildQuestionnaire" color="inherit">Questionnaire</a>
          </div>
        </li>
        {/* ===================================== */}
        {/* Manage Dropdown Menu */}
        {/* ===================================== */}
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Manage
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/manageForms">Forms</a>
          {/* CHANGE QUESTIONNAIRE HREF WHEN NEW ROUTE GETS MADE */}
          <a className="dropdown-item" href="/managePatrons" color="inherit">Patrons</a>
          </div>
        </li>
        {/* ===================================== */}
        {/* Autofill */}
        {/* ===================================== */}
            <li className="nav-item" color="inherit" classNameName={
                window.location.pathname === "/autofill"
                ? "nav-item active"
                : "nav-item"}>
                <Link to="/autofill" classNameName="nav-link">
                    Autofill
                </Link>
            </li>
        {/* ===================================== */}
        {/* Sign Out */}
        {/* ===================================== */}
            <li className="nav-item" color="inherit" classNameName={
                window.location.pathname === "/"
                ? "nav-item active"
                : "nav-item"}>
                <Link to="/" classNameName="nav-link">
                    Sign Out
                </Link>
            
            </li>
          </ul>
        </div>
        </div>
      </nav>
    
    );
  }

export default ButtonAppBar;