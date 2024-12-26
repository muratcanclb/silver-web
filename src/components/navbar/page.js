'use client'
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative bg-gray-700 shadow dark:bg-gray-700">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <a href="#">
                        <img className="w-20 sm:w-24 md:w-32 lg:w-40 xl:w-20" src="./logo1.png" alt="Logo"></img>
                    </a>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-gray-500 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-100 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 8h16M4 16h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                        } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-500 dark:bg-gray-600 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
                >
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <a
                            className="my-2 text-gray-100 transition-colors duration-300 transform dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                            href="#"
                        >
                            Anasayfa
                        </a>
                        <a
                            className="my-2 text-gray-100 transition-colors duration-300 transform dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                            href="#"
                        >
                            Ürünlerimiz
                        </a>
                        <a
                            className="my-2 text-gray-100 transition-colors duration-300 transform dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                            href="#"
                        >
                            İletisim
                        </a>
                        <a
                            className="my-2 text-gray-100 transition-colors duration-300 transform dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                            href="#"
                        >
                            Hakkımızda
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;