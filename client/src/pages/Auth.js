import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import AuthForm from "../components/AuthForm";

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
        <>
            <h2>Star Focus</h2>
            <p>Welcome to your new place for a little insight into space and keeping track of your thoughts. We hope that you enjoy your stay.</p>
            <AuthForm
                inputs={inputs}
                isRegister={isRegister}
                errorState={errorState}
                redirectState={redirectState}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleToggle={handleToggle}
            />
        </>
    );
}