import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthProvider.js";

export default function Navbar() {
    const { logout } = useContext(AuthContext);

    return (
        <nav className="p-1">
            <ul className="list-none flex justify-evenly items-center">
                <li className="border py-3 m-2 shadow-md shadow-zinc-500 text-center w-1/2 text-xl font-medium uppercase bg-green-300">
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "text-white" : "no-underline text-slate-700"
                    } end>
                        Home
                    </NavLink>
                </li>
                <li className="border py-3 m-2 shadow-md shadow-zinc-500 text-center w-1/2 text-xl font-medium uppercase bg-green-300">
                    <NavLink to="journal" className={({ isActive }) =>
                        isActive ? "text-white" : "no-underline text-slate-700"
                    }>
                        Journal
                    </NavLink>
                </li>
                <li className="border py-3 m-2 shadow-md shadow-zinc-500 text-center w-1/2 text-xl font-medium uppercase bg-green-300">
                    <NavLink to="tasks" className={({ isActive }) =>
                        isActive ? "text-white" : "no-underline text-slate-700"
                    }>
                        Tasks
                    </NavLink>
                </li>
                <li className="border py-3 m-2 shadow-md shadow-zinc-500 text-center w-1/2 text-xl font-medium uppercase bg-green-300">
                    <NavLink to="profile" className={({ isActive }) =>
                        isActive ? "text-white" : "no-underline text-slate-700"
                    }>
                        Profile
                    </NavLink>
                </li>
                <li className="border py-3 m-2 shadow-md shadow-zinc-500 text-center w-1/2 text-xl font-medium uppercase bg-green-300">
                    <button onClick={logout}>Logout</button>
                </li>
            </ul>
        </nav>
    );
};