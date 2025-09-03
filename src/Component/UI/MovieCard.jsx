import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieCard = ({ currentMovie }) => {
  return (
    <div className='w-[300px] h-[525px] bg-gray-200 m-3 rounded-lg shadow-md p-3'>
      <img
        src={currentMovie.Poster}
        alt={currentMovie.Title}
        className='w-full h-[325px] object-cover rounded-md shadow-lg shadow-amber-300'
      />
      <h1 className='mt-2 text-xl font-semibold bg-black text-white p-1 rounded-md'>
        {currentMovie.Title}
      </h1>
      <p className='mt-2 text-sm'>
        Year: <span className='font-semibold'>{currentMovie.Year}</span>
      </p>
      <p className='mt-2 text-sm'>
        Type: <span className='font-semibold'>{currentMovie.Type}</span>
      </p>
      <NavLink
        to={`/movie/${currentMovie.imdbID}`}
        className='inline-block mt-4 px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600'
      >
        View Details
      </NavLink>
    </div>
  );
};

export default MovieCard;
