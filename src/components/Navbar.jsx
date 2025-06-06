<<<<<<< HEAD
import React, { useEffect, useState, useRef } from "react";
=======
import React, { useEffect, useState, useRef } from "react";
>>>>>>> 52d83c7074dc85882c9405542ac125c907365ade
import AOS from "aos";
import "aos/dist/aos.css";
import { DiRust } from "react-icons/di";
import { IoIosMenu } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div>
            <div className="w-full bg-green-500/40 h-15 flex  justify-between p-2">
                <div className="flex"><DiRust className="h-10 w-10 text-white" /><span className="text-3xl text-white font-bold ">RentalHub</span></div>


                {/* Search bar */}
                <div class="relative hidden md:block">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer">

                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        class="block w-full md:w-80 pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
                        placeholder="Search for items, people, or places..."
                    />
                </div>
                {/* Account icon */}
                <div className="flex p-1 hover:bg-gray-400/40 hover:rounded-lg hover:p-2 transition-all duration-200 w-20" ref={menuRef}>
                    <button className="flex"
                        onClick={() => setIsOpen(!isOpen)}>

                        <IoIosMenu className="size-9 m-auto" />
                        <MdAccountCircle className="size-9 m-auto" />
                    </button>
                </div>
                {/* dropdown menu */}
                {isOpen && (
                    <div className="absolute right-0 mt-10 w-64 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
                        <ul className="divide-y divide-gray-100 p-4  ">
                            <li><button className="w-full text-left px-3 py-2 hover:bg-gray-100">Log in</button></li>
                            <li><button className="w-full text-left px-3 py-2 hover:bg-gray-100">Sign up</button></li>

                            <li><button className="w-full text-left px-3 py-3 hover:bg-gray-100">🚗 Become a host</button></li>
                            <li><button className="w-full text-left px-3 py-3 hover:bg-gray-100">🔑 How RentalHub works</button></li>
                            <li><button className="w-full text-left px-3 py-2 hover:bg-gray-100">📞 Contact support</button></li>
                            <li><button className="w-full text-left px-3 py-2 hover:bg-gray-100">📄 Legal</button></li>
                            <li><button className="w-full text-left px-3 py-2 hover:bg-gray-100">🛡️ Insurance & protection</button></li>
                            <li><button className="w-full text-left px-3 py-2 hover:bg-gray-100">🛠️ Host tools</button></li>
                        </ul>
                    </div>
                )}

            </div>
        </div>
    );
};


const Navbar = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div>
            <div className="w-full bg-green-500/40 h-15 flex  justify-between p-2">
                <div className="flex"><DiRust className="h-10 w-10 text-white" /><span className="text-3xl text-white font-bold ">RentalHub</span></div>


                {/* Search bar */}
                <div class="relative hidden md:block">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer">

                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        class="block w-full md:w-80 pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
                        placeholder="Search for items, people, or places..."
                    />
                </div>
                {/* Account icon */}
                <div className="flex p-1 hover:bg-gray-400/40 hover:rounded-lg hover:p-2 transition-all duration-200 w-20" ref={menuRef}>
                    <button className="flex"
                        onClick={() => setIsOpen(!isOpen)}>

                        <IoIosMenu className="size-9 m-auto" />
                        <MdAccountCircle className="size-9 m-auto" />
                    </button>
                </div>
                {/* dropdown menu */}
                {isOpen && (
                    <div className="absolute right-0 mt-10 w-64 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
                        <ul className="divide-y divide-gray-100 p-4  ">
                            <li><button className="w-full text-left px-3 py-2 hover:bg-gray-100">Log in</button></li>
                            <li><button className="w-full text-left px-3 py-2 hover:bg-gray-100">Sign up</button></li>

                            <li><button className="w-full text-left px-3 py-3 hover:bg-gray-100">🚗 Become a host</button></li>
                            <li><button className="w-full text-left px-3 py-3 hover:bg-gray-100">🔑 How RentalHub works</button></li>
                            <li><button className="w-full text-left px-3 py-2 hover:bg-gray-100">📞 Contact support</button></li>
                            <li><button className="w-full text-left px-3 py-2 hover:bg-gray-100">📄 Legal</button></li>
                            <li><button className="w-full text-left px-3 py-2 hover:bg-gray-100">🛡️ Insurance & protection</button></li>
                            <li><button className="w-full text-left px-3 py-2 hover:bg-gray-100">🛠️ Host tools</button></li>
                        </ul>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Navbar;
