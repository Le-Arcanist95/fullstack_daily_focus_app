import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
    return (
        <main className='relative min-h-screen bg-red-300'>
            <Header />
            <Outlet />
        </main>
    );
};