import React from 'react'

const Footer = () => {
  return (
      <div>
          <footer className="bg-gray-100 text-gray-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Locations */}
        <div>
          <h3 className="text-lg font-semibold mb-4">RentAnything</h3>
          <ul className="space-y-2">
            <li>USA (EN)</li>
            <li>Canada (EN)</li>
            <li>UK (EN)</li>
            <li>Germany (DE)</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">How it works</a></li>
            <li><a href="#" className="hover:underline">Trust & safety</a></li>
            <li><a href="#" className="hover:underline">For events</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
          </ul>
        </div>

        {/* Hosting */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Hosting</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">List your item</a></li>
            <li><a href="#" className="hover:underline">Earnings calculator</a></li>
            <li><a href="#" className="hover:underline">Host protection</a></li>
            <li><a href="#" className="hover:underline">Community hub</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
          </ul>
        </div>
      </div>

      {/* App Downloads & Legal */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* App Store Badges */}
          <div className="flex gap-4">
            <a href="#" className="block">
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="Download on the App Store"
                className="h-10"
              />
            </a>
            <a href="#" className="block">
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                alt="Get it on Google Play"
                className="h-10"
              />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Cookie preferences</a>
            <a href="#" className="hover:underline">Do not sell my data</a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} RentAnything. All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer