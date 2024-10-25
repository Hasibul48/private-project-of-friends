import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='fixed top-0 left-0 w-full z-50 bg-[#15150B] text-white shadow-md shadow-gray-700'>
            <div className='border-b-4 border-themeColor'>
                <div className="container mx-auto flex justify-between items-center py-2 px-4">
                    <Link to={'/'}>
                        <h1 className='font-thin text-md md:text-lg'>
                            <span className='bg-gradient-to-r text-xl from-indigo-600 via-blue-800 to-pink-700 text-white px-3 rounded-xl py-1 font-semibold'>
                                Dakhil 2025
                            </span>
                            Jabal-e-Noor Dakhil Madrasah
                        </h1>
                    </Link>
                    <div className="flex items-center">
                        <button onClick={handleToggle} className="text-white md:hidden hover:text-themeColor">
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5" />
                                </svg>
                            )}
                        </button>
                        <ul className={`flex flex-col md:flex-row gap-3 md:items-center absolute md:static w-full left-0 md:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'top-14' : 'top-[-490px]'} bg-[#15150B] border-b-4 md:border-b-0 border-themeColor pb-2 md:pb-0`}>
                            <li>
                                <NavLink onClick={handleToggle} className='block py-2 px-4 hover:bg-themeColor text-center rounded-lg' to={'/'}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={handleToggle} className='block py-2 px-4 hover:bg-themeColor text-center rounded-lg' to={'/about'}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={handleToggle} className='block py-2 px-4 hover:bg-themeColor text-center rounded-lg' to={'/gallery'}>
                                    Gallery
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
