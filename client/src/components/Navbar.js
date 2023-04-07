import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthProvider.js";

export default function Navbar() {
    const { logout, user } = useContext(AuthContext);

    if (user) {
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
                    <li className="nav-item">
                        <NavLink to="profile" className={({ isActive }) =>
                            isActive ? "nav-link-active" : "nav-link"
                        }>
                            Profile
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <button onClick={logout}>Logout</button>
                    </li>
                </ul>
            </nav>
        );
    } else {
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
                        <NavLink to="auth" className={({ isActive }) =>
                            isActive ? "nav-link-active" : "nav-link"
                        }>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
};