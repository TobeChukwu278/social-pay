import React, { useState, useEffect } from 'react';

// You would likely fetch these from an API or a local data source
const boostedItems = [
    {
        id: 1,
        title: 'High-Performance Drone Rental',
        description: 'Capture stunning aerial footage with our top-tier drone.',
        imageUrl: 'https://via.placeholder.com/600x300/FFD700/000000?text=Boosted+Drone', // Adjusted placeholder image size
        link: '/listing/drone-rental'
    },
    {
        id: 2,
        title: 'Professional Photography Kit',
        description: 'Everything you need for your next photoshoot, available to borrow.',
        imageUrl: 'https://via.placeholder.com/600x300/90EE90/000000?text=Boosted+Camera', // Adjusted placeholder image size
        link: '/listing/photography-kit'
    },
    {
        id: 3,
        title: 'Latest Gaming Console',
        description: 'Experience immersive gaming without the upfront cost.',
        imageUrl: 'https://via.placeholder.com/600x300/ADD8E6/000000?text=Boosted+Console', // Adjusted placeholder image size
        link: '/listing/gaming-console'
    }
];

const BoostedListing = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Optional: Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % boostedItems.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [boostedItems.length]);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? boostedItems.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === boostedItems.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative w-full overflow-hidden mb-8">
            {/* Container for the slider content */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {boostedItems.map((item) => (
                    <div key={item.id} className="w-full flex-shrink-0">
                        {/* Individual Boosted Item Card - Reduced padding */}
                        <div
                            className="relative bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg shadow-xl overflow-hidden
                         flex flex-col md:flex-row items-center justify-between p-4 md:p-6 mx-auto max-w-6xl h-auto" // Adjusted p- value, added h-auto
                        >
                            <div className="md:w-1/2 text-center md:text-left z-10 p-2 md:p-0"> {/* Reduced internal padding */}
                                <h2 className="text-1xl md:text-3xl font-extrabold mb-2 leading-tight"> {/* Reduced font size */}
                                    {item.title}
                                </h2>
                                <p className="text-base md:text-lg mb-4 opacity-90"> {/* Reduced font size, margin-bottom */}
                                    {item.description}
                                </p>
                                <a
                                    href={item.link}
                                    className="inline-block bg-white text-blue-700 px-6 py-2 rounded-full font-bold shadow-md
                             hover:bg-gray-100 hover:scale-105 transition duration-300 text-sm" // Reduced padding, font size
                                >
                                    View Offer
                                </a>
                            </div>
                            <div className="md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0 z-10"> {/* Adjusted top margin */}
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="rounded-lg shadow-lg max-w-full h-auto object-cover max-h-48 md:max-h-64" // Reduced max-height
                                />
                            </div>
                            {/* Optional: Subtle background pattern/overlay */}
                            <div className="absolute inset-0 bg-pattern-overlay opacity-20 z-0"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 text-gray-800
                   p-2 rounded-full shadow-lg hover:bg-opacity-100 transition-all duration-200 z-20" // Reduced padding
                aria-label="Previous slide"
            >
                &#10094; {/* Left arrow */}
            </button>
            <button
                onClick={goToNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 text-gray-800
                   p-2 rounded-full shadow-lg hover:bg-opacity-100 transition-all duration-200 z-20" // Reduced padding
                aria-label="Next slide"
            >
                &#10095; {/* Right arrow */}
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20"> {/* Adjusted bottom position */}
                {boostedItems.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full ${ // Reduced size
                            currentIndex === idx ? 'bg-blue-600' : 'bg-gray-300'
                            } transition-colors duration-300`}
                        aria-label={`Go to slide ${idx + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default BoostedListing;