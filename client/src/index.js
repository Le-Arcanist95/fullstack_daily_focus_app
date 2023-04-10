import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "./context/AuthProvider";
import { LocationProvider } from "./context/LocationProvider";
import { DataProvider } from "./context/DataProvider";

import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
    <Router>
        <AuthProvider>
            <LocationProvider>
                <DataProvider>
                    <App />
                </DataProvider>
            </LocationProvider>
        </AuthProvider>
    </Router>
);