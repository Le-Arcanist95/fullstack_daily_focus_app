import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "./context/AuthProvider";
import { LocationProvider } from "./context/LocationProvider";
import { JournalProvider } from "./context/JournalProvider";
import { TodoProvider } from "./context/TodoProvider";
import { ThirdPartyApiProvider } from "./context/Third-PartyApiProvider";

import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
    <Router>
        <AuthProvider>
            <LocationProvider>
                <JournalProvider>
                    <TodoProvider>
                        <ThirdPartyApiProvider>
                            <App />
                        </ThirdPartyApiProvider>
                    </TodoProvider>
                </JournalProvider>
            </LocationProvider>
        </AuthProvider>
    </Router>
);