import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='border-b-4 border-green-700 text-center  fixed top-0 bg-green-600 font-bold w-full text-lg text-white'>
            <ul>
                <li className='inline-block py-4'>
                    <Link to='/' className='pl-20 pr-20'>
                        Home
                    </Link>
                </li>
                <li className='inline-block py-4'>
                    <Link to='/about' className='pl-20 pr-20'>
                        About
                    </Link>
                </li>
                <li className='inline-block py-4'>
                    <Link to='/articles-list' className='pl-20 pr-20'>
                        Aritcles
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;