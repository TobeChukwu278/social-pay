// import React, { useState } from 'react'
// import Nav from './components/Nav'
// import Footer from './components/Footer'
// import Home from './pages/Home'
// import Categories from './components/Categories'

// const App = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null)

//   return (
//     <div className='bg-gray-100'>
//       <Nav onSelect={setSelectedCategory} />
//       {/* Show Home if no category is selected, otherwise show the selected category */}
//       {selectedCategory
//         ? <Categories selected={selectedCategory} />
//         : <Home />
//       }
//       <Footer />
//     </div>
//   )
// }

// export default App





import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Clothes from './components/Categories/Clothes'
import Accessories from './components/Categories/Accessories'
import Apartments from './components/Categories/Apartments'
import Electronics from './components/Categories/Electronics'
import House from './components/Categories/House'
import Rentals from './components/Categories/Rentals'
import Shoes from './components/Categories/Shoes'
import Vehicles from './components/Categories/Vehicles'


const App = () => {

  return (
    <div className='bg-gray-100'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clothes' element={<Clothes />} />
        <Route path='/accessories' element={<Accessories />} />
        <Route path='/apartments' element={<Apartments />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/house' element={<House />} />
        <Route path='/rentals' element={<Rentals />} />
        <Route path='/shoes' element={<Shoes />} />
        <Route path='/vehicles' element={<Vehicles />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App