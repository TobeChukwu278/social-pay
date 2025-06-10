import React from 'react'
import { FaUser, FaShoppingCart } from 'react-icons/fa'

const Nav = ({ onSelect }) => {

    const menu = ['clothes', 'electronics', 'apartments', 'house', 'accessories', 'shoes', 'rentals', 'vehicles']

    return (
        <div className='p-3'>
            <div className='flex flex-col'>
                <div className='flex justify-between'>
                    {/* Logo */}
                    <div>
                        <button className='cursor-pointer' onClick={() => onSelect(null)}>
                            <h1 className='text-2xl sm:text-3xl font-bold text-gray-900'>SocialPay</h1>
                        </button>
                    </div>

                    {/* Search input */}
                    <div>
                        <input type='text'
                            placeholder='Search...'
                            className='border border-gray-300 rounded-md p-2  shadow-md bg-white lg:w-lg focus:outline-none focus:ring-2 focus:ring-gray-500'
                        />
                    </div>

                    {/* user profile */}
                    <div className='flex justify-between'>
                        <a href="">
                            <FaUser size={24} className='cursor-pointer fill-gray-700' />
                        </a>
                        <a href="">
                            <FaShoppingCart size={24} className='cursor-pointer fill-gray-700' />
                        </a>

                    </div>
                </div>

                {/* categories */}
                <div className='flex gap-5 font-bold mt-5 overflow-x-auto text-[#6c757d]'>
                    <nav className='text-gray-600 font-bold flex gap-2 overflow-x-auto'>
                        {menu.map((item) => (
                            <button key={item} onClick={() => onSelect(item)}>
                                <span className='border border-gray-300 rounded-md p-1  shadow-md bg-white text-nowrap cursor-pointer'>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Nav