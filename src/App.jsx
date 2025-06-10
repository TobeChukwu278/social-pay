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





import React, { useState } from 'react'
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
  const [selectedCategory, setSelectedCategory] = useState(null)

  const renderCategory = () => {
    switch (selectedCategory) {
      case 'clothes':
        return <Clothes />
      case 'accessories':
        return <Accessories />
      case 'apartments':
        return <Apartments />
      case 'electronics':
        return <Electronics />
      case 'house':
        return <House />
      case 'rentals':
        return <Rentals />
      case 'shoes':
        return <Shoes />
      case 'vehicles':
        return <Vehicles />
      default:
        return <Home />
    }
  }

  return (
    <div className='bg-gray-100'>
      <Nav onSelect={setSelectedCategory} />
      {renderCategory()}
      <Footer />
    </div>
  )
}

export default App