import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import AuthContext from '../../context/AuthProvider.js';

export default function Layout() {
    const { user } = useContext(AuthContext);
    return (
        <main className='relative min-h-screen bg-teal-900'>
            {user && <Header />}
            <Outlet />
        </main>
    );
};