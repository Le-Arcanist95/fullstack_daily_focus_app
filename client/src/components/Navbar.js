import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthProvider.js";

export default function Navbar() {
    const { logout, user } = useContext(AuthContext);

    if (user) {
        return (
            <nav className="p-1">
                <ul className="list-none flex justify-evenly items-center">
                    <li className="border shadow-xl py-3 px-60 text-lg font-light bg-amber-700 uppercase">
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? "text-emerald-700" : "no-underline"
                        } end>
                            Home
                        </NavLink>
                    </li>
                    <li className="border shadow-inner py-3 px-60 text-lg font-light bg-amber-700 uppercase">
                        <NavLink to="journal" className={({ isActive }) =>
                            isActive ? "text-emerald-700" : "no-underline text-white"
                        }>
                            Journal
                        </NavLink>
                    </li>
                    <li className="border shadow-inner py-3 px-60 text-lg font-light bg-amber-700 uppercase">
                        <NavLink to="tasks" className={({ isActive }) =>
                            isActive ? "text-emerald-700" : "no-underline text-white"
                        }>
                            Tasks
                        </NavLink>
                    </li>
                    <li className="border shadow-inner py-3 px-60 text-lg font-light bg-amber-700 uppercase">
                        <NavLink to="profile" className={({ isActive }) =>
                            isActive ? "text-emerald-700" : "no-underline text-white"
                        }>
                            Profile
                        </NavLink>
                    </li>
                    <li className="border shadow-inner py-3 px-60 text-lg font-light bg-amber-700 uppercase">
                        <button onClick={logout}>Logout</button>
                    </li>
                </ul>
            </nav>
        );
    } else {
        return (
            <nav className="p-1">
                <ul className="flex justify-evenly items-center list-none">
                    <li className="border shadow-inner py-3 px-60 w-1/2 text-lg font-light bg-amber-700 uppercase">
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? "text-emerald-700" : "no-underline text-white"
                        } end>
                            Home
                        </NavLink>
                    </li>
                    <li className="border shadow-inner py-3 px-60 w-1/2 text-lg font-light bg-amber-700 uppercase">
                        <NavLink to="auth" className={({ isActive }) =>
                            isActive ? "text-emerald-700" : "no-underline text-white"
                        }>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
};