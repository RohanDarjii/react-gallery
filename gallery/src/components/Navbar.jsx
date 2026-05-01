import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="sticky top-0  flex justify-between bg-gray-800 text-white p-4 mb-5">
            <div>
                <Link to="/" className="text-white ">Gallery App</Link>
            </div>
            
            <div className="flex gap-5">
                <Link to="/" className="mr-4 hover:underline">Home</Link>
                <Link to="/about" className="mr-4 hover:underline">About</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
            </div>
        </div>
    ); 
}

export default Navbar;


