import React from 'react'
const Listing = [
    {
        id: 1,
        img: '',
        heading: 'Cozy Apartment',
        pricePerDay: '$50/day',
        location: 'ABJ'
    },
    {
        id: 2,
        img: '',
        heading: 'Car',
        pricePerDay: '$30/day',
        location: 'LAG'
    },
    {
        id: 3,
        img: '',
        heading: 'Dress',
        pricePerDay: '$10/day',
        location: 'ABA'
    },
    {
        id: 4,
        img: '',
        heading: 'Pot',
        pricePerDay: '$3/day',
        location: 'OWR'
    }
]

const FeaturedListings = () => {
    return (
        <div className='flex flex-col justify-center sm:flex-row sm:flex-wrap gap-17 mx-2.5 text-gray-600 '>{
            Listing.map((item) => (
                <div key={item.id} className='border max-w-fit border-gray-300 rounded-md p-2  shadow-md bg-white '>
                    <img src={item.img} className='w-50 h-39 object-cover rounded-md hover:scale-102 transition-transform duration-500 ease-in-out shadow-gray-800 hover:shadow-md' />
                    <h2 className='font-bold'>{item.heading}</h2>
                    <div className='flex items-center gap-1'>
                        <p className='font-semibold'>{item.pricePerDay}</p>
                        <span className='w-1 h-1 rounded-full bg-black'></span>
                        <p>{item.location}</p>
                    </div>
                </div>
            ))
        }</div>
    )
}

export default FeaturedListings