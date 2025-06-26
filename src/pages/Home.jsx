import React from 'react'
import { useNavigate } from 'react-router-dom';
import BoostedListing from '../components/BoostedListing'
import FeaturedListings from '../components/FeaturedListings'
import Categories from '../components/Categories'
import HeroImage from '../assets/Gemini_Generated_Image_ummdwlummdwlummd.png'

const testimonials = [
    {
        name: "Jane Doe",
        text: "SocialPay made it so easy to find and rent what I needed. Highly recommended!",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "John Smith",
        text: "Great selection and smooth experience. I love the deals I find here.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
];

const Home = ({ isLoggedIn }) => {

    const navigate = useNavigate();

    return (
        <div>
            {/* Sliding advert display */}
            <BoostedListing />

            {/* Hero welcome message - Updated background, padding, and button style */}
            <div className='bg-gradient-to-b from-[#FDF9EB] to-white py-24 px-6 text-center md:text-left md:flex md:items-center md:justify-between border-b border-gray-200'>
                <div className='max-w-xl'>
                    <h1 className='text-5xl font-extrabold mb-4 text-gray-800 leading-tight'>
                        Borrow What You Need. <span className="text-teal-600">Lend What You Don't.</span>
                    </h1>
                    <p className='text-xl text-gray-700 mb-8 font-medium'>
                        Discover a smarter way to access what you need - without owning everything.
                    </p>
                    {!isLoggedIn && (
                        <button
                            className='bg-blue-700 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-800 transition duration-300 ease-in-out transform hover:scale-105'
                            onClick={() => navigate('/auth')}
                        >
                            Get Started
                        </button>
                    )}
                </div>
                {/* illustration */}
                <img src={HeroImage} alt='Sharing items illustration' className='hidden md:block w-1/2 max-w-md mx-auto md:mx-0 mt-10 md:mt-0' />
            </div>

            {/* Promotional Banner - Added mx-auto for better centering on larger screens */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-lg shadow-md text-center my-10 mx-4 max-w-4xl lg:mx-auto">
                <span className="font-bold">Limited Time Offer:</span> Get 10% off your first transaction! Use code <span className="font-mono bg-yellow-200 px-2 py-1 rounded text-yellow-900 font-semibold">WELCOME10</span>
            </div>

            {/* Featured Listing */}
            <h1 className='text-center font-bold text-3xl mb-6 text-gray-800 mt-12'>Featured Listings</h1>
            <FeaturedListings />

            {/* Categories */}
            <h1 className='text-center font-bold text-3xl mb-6 text-gray-800 mt-12'>Browse By Category</h1> {/* Added a header for categories */}
            <Categories />

            {/* Testimonials */}
            <section className="my-20 bg-gray-50 py-16"> {/* Added background and padding to section */}
                <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">What Our Users Say</h2>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center px-4"> {/* Added px-4 for mobile padding */}
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-lg p-7 flex flex-col items-center max-w-xs transform hover:scale-105 transition duration-300 ease-in-out">
                            <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mb-4 border-2 border-blue-400" /> {/* Larger avatar, border */}
                            <p className="italic text-gray-700 text-center mb-3">"{t.text}"</p>
                            <span className="font-bold text-blue-600 text-lg">{t.name}</span> {/* Stronger name styling */}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home