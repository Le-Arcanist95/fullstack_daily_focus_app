import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav id="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "nav-link-active" : "nav-link"
                    } end>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="journal" className={({ isActive }) =>
                        isActive ? "nav-link-active" : "nav-link"
                    }>
                        Journal
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="tasks" className={({ isActive }) =>
                        isActive ? "nav-link-active" : "nav-link"
                    }>
                        Tasks
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}