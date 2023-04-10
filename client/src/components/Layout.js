import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
    return (
        <main className='relative min-h-screen bg-teal-900'>
            <Header />
            <Outlet />
        </main>
    );
};