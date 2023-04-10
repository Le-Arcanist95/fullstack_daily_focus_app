import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/utility/ProtectedRoute";
import Layout from "./components/layout/Layout";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Journal from "./pages/Journal";
import Tasks from "./pages/Tasks";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="auth" element={<Auth />} />
                <Route path="profile" element={<ProtectedRoute />}>
                    <Route index element={<Profile />} />
                </Route>
                <Route path="journal" element={<ProtectedRoute />}>
                    <Route index element={<Journal />} />
                </Route>
                <Route path="tasks" element={<ProtectedRoute />}>
                    <Route index element={<Tasks />} />
                </Route>
            </Route>
        </Routes>
    );
};