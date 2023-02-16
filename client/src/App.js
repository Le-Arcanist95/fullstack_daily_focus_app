import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
    return (
        <div id="page-container">
            <Header />
            <div id="content-wrapper">
                <Outlet />
            </div>
        </div>
    );
};