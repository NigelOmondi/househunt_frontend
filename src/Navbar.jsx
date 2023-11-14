import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#8d00df]'>HouseHunt</h1>
      <ul className='hidden md:flex'>
      <Link to='/home' className='p-4'>Home</Link>
      <Link to='/about' className='p-4'>About</Link>
      <Link to='/features' className='p-4'>Features</Link>
      <Link to='/contact' className='p-4'>Contact</Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full text-white border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#8d00df] m-4'>HouseHunt</h1>
          <Link to="/home" onClick={closeNav}><li className='p-4 border-b border-gray-600'>Home</li></Link>
          <Link to="/about" onClick={closeNav}><li className='p-4 border-b border-gray-600'>About</li></Link>
          <Link to="/features" onClick={closeNav}><li className='p-4 border-b border-gray-600'>Features</li></Link>
          <Link to="/contact" onClick={closeNav}><li className='p-4'>Contact</li></Link>
      </ul>
    </div>
  );
};

export default Navbar;