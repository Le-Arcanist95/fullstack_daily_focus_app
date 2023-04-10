import React from "react";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="sticky top-0 h-16 z-10 bg-transparent opacity-95">
            <Navbar />
        </header>
    );
};