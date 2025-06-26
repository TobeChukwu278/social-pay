import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';

const Nav = () => {
    const [showCategories, setShowCategories] = useState(false);

    return (
        <div className='p-3 bg-white shadow'>
            <div className='flex flex-col gap-3'>
                {/* Top bar */}
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <NavLink to='/' className='cursor-pointer'>
                        <h1 className='text-2xl sm:text-3xl font-bold text-gray-900'>SocialPay</h1>
                    </NavLink>

                    {/* Search input */}
                    <div className='flex-1 mx-4 hidden sm:block'>
                        <input
                            type='text'
                            placeholder='Search...'
                            className='w-full border border-gray-300 rounded-md p-2 shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-500'
                        />
                    </div>

                    {/* User profile */}
                    <div className='flex items-center gap-4'>
                        <Link to='/account'>
                            <FaUser size={24} className='cursor-pointer fill-gray-700' />
                        </Link>
                        {/* Hamburger for mobile */}
                        <button
                            className='sm:hidden ml-2'
                            onClick={() => setShowCategories(!showCategories)}
                            aria-label="Toggle categories"
                        >
                            <HiMenu size={28} />
                        </button>
                    </div>
                </div>

                {/* Mobile search bar */}
                <div className='block sm:hidden mt-2'>
                    <input
                        type='text'
                        placeholder='Search...'
                        className='w-full border border-gray-300 rounded-md p-2 shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-500'
                    />
                </div>

                {/* Categories */}
                <div
                    className={`flex gap-5 font-bold mt-5 overflow-x-auto text-[#6c757d] transition-all duration-300
                        ${showCategories ? 'max-h-40 py-2' : 'max-h-0 py-0'} sm:max-h-none sm:py-0
                    `}
                    style={{ flexWrap: 'nowrap' }}
                >
                    <NavLink to='/clothes' className='hover:text-gray-900 whitespace-nowrap'>Clothes</NavLink>
                    <NavLink to='/electronics' className='hover:text-gray-900 whitespace-nowrap'>Electronics</NavLink>
                    <NavLink to='/apartments' className='hover:text-gray-900 whitespace-nowrap'>Apartments</NavLink>
                    <NavLink to='/house' className='hover:text-gray-900 whitespace-nowrap'>House</NavLink>
                    <NavLink to='/accessories' className='hover:text-gray-900 whitespace-nowrap'>Accessories</NavLink>
                    <NavLink to='/shoes' className='hover:text-gray-900 whitespace-nowrap'>Shoes</NavLink>
                    <NavLink to='/rentals' className='hover:text-gray-900 whitespace-nowrap'>Rentals</NavLink>
                    <NavLink to='/vehicles' className='hover:text-gray-900 whitespace-nowrap'>Vehicles</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Nav;