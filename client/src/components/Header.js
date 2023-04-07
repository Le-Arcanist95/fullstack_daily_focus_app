import React from "react";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="sticky top-0 h-28">
            <h1 className="text-center"> Daily Focus App </h1>
            <Navbar />
        </header>
    );
};