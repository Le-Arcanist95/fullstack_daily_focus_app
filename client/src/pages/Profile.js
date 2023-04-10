import { useContext, useState } from "react";
import AuthContext from "../context/AuthProvider";
import DataContext from "../context/Third-PartyApiProvider";

export default function Profile() {
    const { user } = useContext(AuthContext);
    const { updateProfile } = useContext(DataContext);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [updateToggle, setUpdateToggle] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProfile({ name, email, password, confirmPassword });
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-3xl font-bold">Profile</h1>
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <h2 className="text-xl font-bold">Name: { user.name }</h2>
                    <h2 className="text-xl font-bold">Email: { user.email }</h2>
                </div>
                <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700" onClick={() => setUpdateToggle(!updateToggle)}>Update Profile</button>
            </div>
            { updateToggle && (
                <form className="flex flex-col items-center justify-center w-full h-full" onSubmit={handleSubmit}>
                    <input className="px-4 py-2 mt-4 text-black border border-gray-300 rounded" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input className="px-4 py-2 mt-4 text-black border border-gray-300 rounded" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="px-4 py-2 mt-4 text-black border border-gray-300 rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input className="px-4 py-2 mt-4 text-black border border-gray-300 rounded" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700" type="submit">Update</button>
                </form>
            )}
        </div>
    );
};