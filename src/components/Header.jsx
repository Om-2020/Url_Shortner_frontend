import React from 'react'

import { logo_url } from '../utilis/constant';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
      <header className="bg-blue-500 text-white p-8 fixed w-full z-50 flex justify-between items-center">
          <div className="container mx-auto">
              <img src={logo_url} className="h-20 w-20" alt="logo_url" />
          </div>

          <div className="flex items-center mr-20">
              <Link to="/home" className="text-white hover:text-red-500 mx-2 font-bold text-xl  ">Home</Link>
              <Link to="/analytics" className="text-white  hover:text-red-500 mx-2 font-bold text-xl">Analytics</Link>
              <button className="text-white  hover:text-red-500 mx-2 font-bold text-xl">Logout</button>
          </div>
      </header>

  )
}
