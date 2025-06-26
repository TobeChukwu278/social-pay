import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';

import Clothes from './components/Categories/Clothes';
import Accessories from './components/Categories/Accessories';
import Apartments from './components/Categories/Apartments';
import Electronics from './components/Categories/Electronics';
import House from './components/Categories/House';
import Rentals from './components/Categories/Rentals';
import Shoes from './components/Categories/Shoes';
import Vehicles from './components/Categories/Vehicles';

import Account from './components/Account/Account';
import DashBoard from './components/Account/DashBoard';
import Listings from './components/Account/Listings';
import Orders from './components/Account/Orders';
import Messages from './components/Account/Messages';
import Saved from './components/Account/Saved';
import Billing from './components/Account/Billing';
import Profile from './components/Account/Profile';
import Password from './components/Account/Password';
import Settings from './components/Account/Settings';

import CartProvider from './components/Cart/CartProvider';
import CartDrawer from './components/Cart/CartDrawer';
import CartButton from './components/Cart/CartButton';

import ProductDetails from './components/ProductDeatails';

import AuthPage from './components/Auth';

import SellerTerms from './components/SellerTerms';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <CartProvider>
      <div className="bg-[#FDF9EB] min-h-screen flex flex-col">
        <Nav />

        {/* Cart UI */}
        <CartButton onClick={() => setIsCartOpen(true)} />
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

        <main className="flex-1">
          <Routes>
            {/* Authentication Routes */}
            <Route path="/auth" element={
              isLoggedIn
                ? <Navigate to="/" />
                : <AuthPage onLogin={() => setIsLoggedIn(true)} />
            } />

            {/* Public Routes */}
            <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/apartments" element={<Apartments />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/house" element={<House />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/vehicles" element={<Vehicles />} />

            {/* Account Routes */}
            <Route path="/account" element={<Account />}>
              <Route path="dashboard" element={<DashBoard />} />
              <Route path="listings" element={<Listings />} />
              <Route path="orders" element={<Orders />} />
              <Route path="messages" element={<Messages />} />
              <Route path="saved" element={<Saved />} />
              <Route path="billing" element={<Billing />} />
              <Route path="profile" element={<Profile />} />
              <Route path="password" element={<Password />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            {/* product detail route */}
            <Route path="/product/:id" element={<ProductDetails />} />

            {/* Seller Terms Route */}
            <Route path="/seller-signup" element={<SellerTerms />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
