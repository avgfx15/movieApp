import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='flex flex-col items-center h-screen'>
      <div className='text-center h-[90%] w-full flex flex-col shadow-xl justify-center items-center md:flex-row md:justify-around homeBg'>
        <div className='w-7/12'>
          <h1 className='text-4xl font-bold mb-4 text-blue-500'>
            Welcome to MovieMania
          </h1>
          <p className='text-lg text-gray-600'>
            Your ultimate destination for movie information and reviews.
          </p>
          <NavLink to='/movie'>
            <button className='mt-4 px-6 py-2 bg-red-500 text-white rounded hover:bg-blue-600 transition duration-300'>
              Explore Now
            </button>
          </NavLink>
        </div>
        <div className='w-5/12'>
          <img
            src='https://www.posterized.in/cdn/shop/collections/MOVIES.jpg?v=1728996959'
            alt='Movie Mania'
            className='rounded-lg shadow-lg shadow-gray-400 w-[50%] h-[50%] object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
