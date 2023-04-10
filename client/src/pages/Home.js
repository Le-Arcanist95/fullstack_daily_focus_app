import React from "react";
import { NavLink } from "react-router-dom";

import NasaAPOD from "../components/elements/NasaAPOD";
import DigitalClock from "../components/elements/DigitalClock";
import SunWidget from "../components/elements/SunWidget";

export default function Home() {
    return (
        <main className="mx-auto">
            <section id="Intro" className="w-11/12 p-10 mx-auto my-4 text-center shadow-2xl bg-slate-200 rounded-3xl">
                <h1 className="text-4xl font-bold">Welcome to the Dashboard!</h1>
                <p className="text-xl">Please have a look around this page and I hope that you will enjoy what you see. As the name implies, this application is a tool to help you focus on what is important. The dashboard is here as a little bit of fun and enjoyment for those who love the stars. If you would like to access the rest of our utilities such as the journal entries and todo list, please signup or login with the button below!</p>
                <button className="bg-green-300 hover:bg-green-400 text-slate-700 font-bold py-2 px-4 rounded-full">
                    <NavLink to="auth" className={({ isActive }) =>
                        isActive ? "text-white" : "no-underline text-slate-700"
                    }>
                        Login
                    </NavLink>
                </button>
            </section>
            <section id="NasaApod" className="w-1/2 h-1/2 p-10 mx-2 my-4 text-center shadow-2xl border-t-1 border-slate-700 bg-slate-200 rounded-3xl">
               <NasaAPOD/> 
            </section>
            <section id="TimeWidget" className="w-1/2 h-1/2 p-10 mx-2 my-4 text-center shadow-2xl border-t-1 border-slate-700 bg-slate-200 rounded-3xl">
                <SunWidget/>
                <DigitalClock/>
            </section>
        </main>
    );
};