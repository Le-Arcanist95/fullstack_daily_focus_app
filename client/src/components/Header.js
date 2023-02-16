import React from "react";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header id="header">
            <p className="cloud-text cloud-title">Daily Focus App</p>
            <Navbar />
        </header>
    );
};