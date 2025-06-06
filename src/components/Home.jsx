import React from "react";

const Home = () => {

  return (
    <div>
      <section className="bg-gradient-to-b from-green-500 to-green-600/20 via-indigo-200 min-h-screen">
  {/* Search Bar (Mobile only) */}
  <div className=" top-15 left-0 right-0  p-2 md:hidden">
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input 
        type="text" 
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent placeholder-gray-400" 
        placeholder="Search for items, people, or places..."
      />
    </div>
  </div>

        {/* Main Content (along search bar) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-35 pb-24">
  <div class="text-center ">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Share More, Spend Less
            </h1>
            <p class="font-bold text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
                Discover,borrow and lend everyday, items within your community-from tools and gear, to party supplies and outdoor equipments.
            </p>
            <div class="mt-10">
                <button class="animate-bounce bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-200 transform hover:scale-105">
                    Join your community
                </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-35 pb-24">
  <div class="text-center ">
            <h1 class="text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
        Available all over Nigeria
            </h1>
            <p class="font-semibold font-serif md:text-[20px] text-gray-600 max-w-2xl mx-auto mb-10">
                Lagos city, Abuja, Enugu, Anambra, Imo, Delta, Kaduna, Port-Harcourt and Rivers among other states...
            </p>
            <div class="mt-10">
                <a href="#" className=" text-red-500 font-semibold font-serif text-lg"> 
                    Join your community
                </a>
            </div>
          </div>
          </div>
</section>
    </div>
  );
};

export default Home;
