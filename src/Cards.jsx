import React from 'react';
import Filter from '../src/images/filter.svg'
import FowardMail from '../src/images/forwardmail.svg'
import PrivacyTip from '../src/images/privacy.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Cards = () => {
  return (
    <div className='w-full py-[3rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Filter} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Filter Houses</h2>
              <p className='text-center text-4xl font-bold'>Browse collections</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Search by County</p>
                  <p className='py-2 border-b mx-8'>Search by Price</p>
                  <p className='py-2 border-b mx-8'>View property images</p>
              </div>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-12 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={FowardMail} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Make Inquiries</h2>
              <p className='text-center text-4xl font-bold'>Choose your budget</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Get customized results</p>
                  <p className='py-2 border-b mx-8'>Arrange for a site visit</p>
                  <p className='py-2 border-b mx-8'>Have all necessary info beforehand</p>
              </div>
              <Link to="/all">
              <button className='bg-[#8d00df] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Make Inquiry</button>
              </Link>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={PrivacyTip} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Data Privacy</h2>
              <p className='text-center text-4xl font-bold'>Protection first</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>All sensitive data is encrypted</p>
                  <p className='py-2 border-b mx-8'>No third-party access</p>
                  <p className='py-2 border-b mx-8'>Secure and free</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Cards;