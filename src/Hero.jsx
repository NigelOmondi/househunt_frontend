import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import searchgif from "../src/images/search.gif";
const Hero = () => {
  return (
    <div className='text-black'>
      <img className="flex mx-auto" src={searchgif} alt="searchgif" />
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
              <p className='text-[#8d00df] font-bold p-2'>
                 PROVIDING HOUSES ALL OVER KENYA
              </p>
              <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-2'>
                 Find a house or a customer.
              </h1>
              <div className='flex justify-center items-center'>
                 <p className='md:text-5xl sm:text-4xl text-xl font-bold py-2'>
                    Are you looking to
                 </p>
                 <Typed
                   className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#8d00df]'
                   strings={['Buy', 'Sell', 'Rent']}
                   typeSpeed={120}
                   backSpeed={140}
                   loop
                   />
               </div>
               <p className='md:text-2xl text-xl font-bold text-gray-500'>Check current listings today.</p>
               <Link to="/all">
               <button className='bg-[#8d00df] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Go to featured Houses</button>
               </Link>
           </div>
      </div>
  );
};

export default Hero;