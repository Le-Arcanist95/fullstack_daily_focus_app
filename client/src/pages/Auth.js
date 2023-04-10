import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import AuthForm from "../components/auth/AuthForm";

const defaultInputs = {
    username: "",
    password: "",
    repeatPassword: "",
    email: ""
}

export default function Auth() {
    const [inputs, setInputs] = useState(defaultInputs);
    const [isRegister, setIsRegister] = useState(false);
    const { user, errorState, redirectState, login, register } = useContext(AuthContext);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (isRegister) {
            register(inputs);
        } else {
            login(inputs);
        }
    }

    function handleToggle() {
        setIsRegister(prevIsRegister => !prevIsRegister);
    }

    if (user) return <Navigate to="/dashboard" />;

    return (
        <main className="h-screen flex flex-col justify-center items-center">
            <section className="w-1/2 p-10 mx-2 my-4 text-center shadow-2xl border-t-1 border-slate-700 bg-slate-200 rounded-3xl">
                <div className="flex flex-col items-center justify-center bg-slate-50 p-4 m-4 rounded-full">
                    <h1 className="text-4xl text-center">Star Focus</h1>
                    <p className="text-center">Welcome to your new place for a little insight into space and keeping track of your thoughts. We hope that you enjoy your stay.</p>
                </div>
                {/* <h1 className="text-4xl text-center">Star Focus</h1>
                <p className="text-center">Welcome to your new place for a little insight into space and keeping track of your thoughts. We hope that you enjoy your stay.</p> */}
                <AuthForm
                    inputs={inputs}
                    isRegister={isRegister}
                    errorState={errorState}
                    redirectState={redirectState}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleToggle={handleToggle}
                />
            </section>
        </main>
    );
}