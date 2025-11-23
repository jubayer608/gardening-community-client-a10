import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className="min-h-screen bg-theme-primary">
            <header className="sticky top-0 z-50">
                <Navbar></Navbar>
            </header>
            <main className="min-h-[calc(100vh-200px)] pt-16 md:pt-20">
                  <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;