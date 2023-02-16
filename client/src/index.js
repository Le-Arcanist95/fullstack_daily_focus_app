import React from "react";
import { createRoot } from "react-dom/client";
import { 
    createBrowserRouter, 
    createRoutesFromElements,
    RouterProvider, 
    Route 
} from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Journal from "./routes/Journal";
import Tasks from "./routes/Tasks";
import "./index.scss";

const root = createRoot(document.getElementById("root"));
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="journal" element={<Journal />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="*" element={
                <main style={{padding: "1em"}}>
                    <p>Oops! You've reached an empty page!</p>
                </main>
            }/>
        </Route>
    )
);

root.render(
    <RouterProvider router={ router } />
)