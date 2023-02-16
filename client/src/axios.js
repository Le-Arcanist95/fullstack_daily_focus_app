import axios from "axios";

const serverClient = axios.create({
    baseURL: "http://localhost:9000",
    headers: {
        "Content-Type": "application/json",
    },
});

const serverClientPrivate = axios.create({
    baseURL: `http://localhost:9000/api/`,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export { serverClient, serverClientPrivate };