import React from "react"

const Nav = ({ onSelect }) => {

    const menu = ['all', 'clothes', 'electronics', 'apartments', 'house', 'accessories', 'shoes', 'fashion', 'rentals', 'vehicles']

    return (
        <nav className='text-gray-600 font-bold flex gap-2 overflow-x-auto'>
            {menu.map((item) => (
                <button key={item} onClick={() => onSelect(item)}>
                    <span className='border border-gray-300 rounded-md p-1  shadow-md bg-white text-nowrap cursor-pointer'>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                </button>
            ))}
        </nav>
    )
}

export default Nav;