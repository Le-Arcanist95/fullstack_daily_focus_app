import axios from "axios";

export const axiosClient = axios.create({
    headers: {
        "Content-Type": "application/json"
    }
});

export const serverClient = axios.create({
    baseURL: "http://localhost:9000",
    headers: {
        "Content-Type": "application/json",
    },
});

export const serverClientPrivate = axios.create({
    baseURL: `http://localhost:9000/api/`,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});