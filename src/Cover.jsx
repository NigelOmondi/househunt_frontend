import React from 'react';
import photo from "../src/images/hsesearch.jpg";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Cover = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={photo} alt='search media' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#8d00df] font-bold '>ENTIRE REAL ESTATE AT THE PALM OF YOUR HANDS</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Househunting made easier</h1>
          <p>
                HouseHunt WebApp is a real estate working solution for everyone,
                both first time house or home buyers to the
                more experienced group(s) looking to buy property.
                We help you right from the first step of prospecting houses
                to the final step of making an offer and everything in between!
          </p>
          <Link to="/all">
          <button className='bg-[#8d00df] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cover;