import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaUser, FaShoppingCart } from 'react-icons/fa'

const Nav = () => {



    return (
        <div className='p-3'>
            <div className='flex flex-col'>
                <div className='flex justify-between'>
                    {/* Logo */}
                    <div>
                        <NavLink to='/' className='cursor-pointer' >
                            <h1 className='text-2xl sm:text-3xl font-bold text-gray-900'>SocialPay</h1>
                        </NavLink>
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




                        <Link to='/account'>
                            <FaUser size={24} className='cursor-pointer fill-gray-700' />
                        </Link>
                        {/* <Link to=''>
                            <FaShoppingCart size={24} className='cursor-pointer fill-gray-700' />
                        </Link> */}

                    </div>
                </div>

                {/* categories */}
                <div className='flex gap-5 font-bold mt-5 overflow-x-auto text-[#6c757d]'>
                    <NavLink to='/clothes' className='hover:text-gray-900'>Clothes</NavLink>
                    <NavLink to='/electronics' className='hover:text-gray-900'>Electronics</NavLink>
                    <NavLink to='/apartments' className='hover:text-gray-900'>Apartments</NavLink>
                    <NavLink to='/house' className='hover:text-gray-900'>House</NavLink>
                    <NavLink to='/accessories' className='hover:text-gray-900'>Accessories</NavLink>
                    <NavLink to='/shoes' className='hover:text-gray-900'>Shoes</NavLink>
                    <NavLink to='/rentals' className='hover:text-gray-900'>Rentals</NavLink>
                    <NavLink to='/vehicles' className='hover:text-gray-900'>Vehicles</NavLink>

                </div>
            </div>
        </div>
    )
}

export default Nav