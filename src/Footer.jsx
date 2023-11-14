import React from 'react';
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';
import { FaHashnode } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='bg-blackmax-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-500'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#8d00df]'>HouseHunt</h1>
        <p className='py-4'>Feel free to go over our resources and documentation, to better get a good feel of what we do.
        <br></br>Reach out on any of these platforms.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
        <a href="https://www.linkedin.com/in/nigel-omondi-8b9333131/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
      <a href="https://twitter.com/_OmondiNigel" target="_blank" rel="noopener noreferrer">
        <FaTwitterSquare size={30} />
      </a>
      <a href="https://github.com/NigelOmondi" target="_blank" rel="noopener noreferrer">
        <FaGithubSquare size={30} />
      </a>
      <a href="https://nigelengineer.hashnode.dev/" target="_blank" rel="noopener noreferrer">
        <FaHashnode size={30} />
      </a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-600'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-600'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-600'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-600'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;