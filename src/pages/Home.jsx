import React from 'react'
import BoostedListing from '../components/BoostedListing'
import FeaturedListings from '../components/FeaturedListings'
import Categories from '../components/Categories'

const Home = () => {
    return (
        <div>
            {/* for sliding display, kinda advert */}
            <BoostedListing />

            {/* Hero welcome message */}
            <div className='bg-gardient-to-b from-white to-gray-100 py-20 px-6 text-center md:text-left md:flex md:items-center md:justify-between'>
                <div className='max-w-xl'>
                    <h1 className='text-4xl font-bold mb-4'>Borrow What You Need. Lend What You Don't.</h1>
                    <p className='text-lg text-gray-600 mb-6'>Discover a smater way to access what you need - without owning everything.</p>
                </div>

                {/* illustration */}
                <img src='https://undraw.co/illustration/sharing-articles_agyr' alt='Sharing items illustration' className='hidden md:block w-1/2 max-w-md' />

            </div>



            {/* Featured Listing */}
            <h1 className='text-center font-bold text-2xl mb-4'>Featured Listings</h1>
            <FeaturedListings />

            {/* Categories */}
            <Categories />
        </div>
    )
}

export default Home