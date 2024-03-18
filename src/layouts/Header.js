import React, { useState } from 'react'
import Logo from '../components/Logo'
import {Link, useLocation} from "react-router-dom";

export const Header = () => {
    const IsActive = (link) => {
        let location = useLocation().pathname.split('/');
        return link === location[1]
    }
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const NavIcons = () => {
        if(!showMobileMenu){
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )
        }
        return (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        )
    }
    const activeClass = "pb-8 border-primary text-gray-900 block md:inline-flex items-center px-1 pt-3 border-b-4 text-sm font-semibold"
    const inactiveClass = "pb-8 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 block md:inline-flex items-center px-1 pt-3 border-b-2 text-sm font-semibold"
    return (
        <header>
            <nav className="w-full pt-1 bg-white fixed z-40 border-b border-blue-100">
                <div className="md:flex md:justify-between px-6 md:px-12 items-center">
                    <div className="inline-flex items-center">
                        <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="text-gray-600 inline-flex p-2 rounded md:hidden outline-none" data-target="#navigation">
                            <NavIcons />
                        </button>
                        <Link to="/" className="py-2 ml-4 inline-flex items-center">
                            <Logo />
                        </Link>
                    </div>
                    <div className={showMobileMenu ? 'md:flex pt-1' : 'hidden md:flex justify-end pt-1'}>
                        <div className="lg:ml-6 lg:flex lg:space-x-8 py-2 md:py-0">
                            <Link
                                to="/"
                                className={`${IsActive('') ? activeClass : inactiveClass}`}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about-us"
                                className={`${IsActive('about-us') ? activeClass : inactiveClass}`}
                            >
                                About Us
                            </Link>
                            <Link
                                to="/faqs"
                                className={`${IsActive('faqs') ? activeClass : inactiveClass}`}
                            >
                                FAQs
                            </Link>
                            <button
                                className="hidden py-6 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
                            >
                                EN
                            </button>
                        </div>
                        <div className="px-5 pt-3 hidden sm:flex">
                            <svg
                                width={1}
                                height={24}
                                viewBox="0 0 1 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2={24} stroke="#AADCF3" />
                            </svg>
                        </div>
                        <div className="sm:flex-shrink-0 pt-1">
                            <Link
                                to="/subscribe"
                                className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md focus:outline-none text-gray-800"
                            >
                                <span>Log in</span>
                            </Link>
                            <Link
                                to="/subscribe"
                                className="relative sm:inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary focus:outline-none"
                            >
                                <span>Sign Up</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}