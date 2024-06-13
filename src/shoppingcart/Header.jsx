import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoIosCart } from "react-icons/io";
import 'tailwindcss/tailwind.css';

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const location = useLocation();

  return (
    <div className='header bg-black text-white text-end p-4 items-center'>
      <div className='container flex justify-between mx-auto'>
      {location.pathname === '/Checkout' && (
        <Link to="/" className="text-white font-semibold">
          Back to Home
        </Link>
      )}
      <div className="header_end">
        <Link to="/Checkout">
          <span className='flex w-24 p-1 font-semibold rounded-lg mx-auto bg-orange-600'>
            Cart 
            <strong className='flex'>
              <IoIosCart className='mt-1 mx-2 text-xl'/>
              {cart.cart.length}
            </strong>
          </span>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Header;
