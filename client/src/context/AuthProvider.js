import React, { createContext, useState } from "react";
import { axiosClient } from "../axios.js";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [userState, setUserState] = useState({
        user: JSON.parse(localStorage.getItem("user")) || null,
        token: localStorage.getItem("token") || ""
    });
    const [errorState, setErrorState] = useState(null);
    const [redirectState, setRedirectState] = useState(null);

    const handleAuthError = (err) => {
        setErrorState(err.response.data.errMsg);
        setTimeout(() => setErrorState(""), 10000);
    };

    const login = async (credentials) => {
        try {
            const response = await axiosClient.post("/auth/login", credentials);
            const { user, token } = response.data;
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);
            setUserState({ user, token });
            setRedirectState("/");
        } catch (error) {
            handleAuthError(error);
        }
    };

    const register = async (credentials) => {
        try {
            await axiosClient.post("/auth/register", credentials);
            setRedirectState("/login");
        } catch (error) {
            handleAuthError(error);
        }
    };

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUserState({ user: null, token: "" });
        setRedirectState("/login");
    };

    return (
        <AuthContext.Provider value={{ ...userState, errorState, redirectState, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}