import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const movieDetails = useLoaderData();
  console.log(movieDetails);

  const navigate = useNavigate();

  // % Convert in to hh:mm Format
  const totalMinutes = movieDetails.Runtime.replace(' min', '');

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const formatedTime = `${hours} h ${minutes} m`;

  // * Go To Back

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold'>Movie Details Page</h1>
      <div className='flex gap-5 mt-10 justify-center items-center w-10/12'>
        <div className='w-4/12 rounded-lg m-auto p-4'>
          <img
            src={movieDetails.Poster}
            alt=''
            className='h-100 w-100 object-cover rounded-lg'
          />
        </div>
        <div className='w-8/12'>
          <h1 className='text-2xl font-bold'>Name : {movieDetails.Title}</h1>
          <p className='text-lg'>
            Language : {''}
            <span className='font-bold'>{movieDetails.Language}</span>
          </p>
          <p className='text-lg'>
            Released Date:{' '}
            <span className='font-bold'>{movieDetails.Released}</span>
          </p>
          <p className='text-lg'>
            Genre: <span className='font-bold'>{movieDetails.Genre}</span>
          </p>
          <p className='text-lg'>
            Director: <span className='font-bold'>{movieDetails.Director}</span>
          </p>
          <p className='text-lg'>
            Actors: <span className='font-bold'>{movieDetails.Actors}</span>
          </p>
          <p className='text-lg'>
            Plot: <span className='font-bold'>{movieDetails.Plot}</span>
          </p>
          <div>
            <p className='text-lg inline-block mr-5'>
              Time: <span className='font-bold'>{formatedTime}</span>
            </p>
            <p className='text-lg inline-block mr-5'>
              Rating:{' '}
              <span className='font-bold'>{movieDetails.imdbRating}</span>
            </p>
            <p className='text-lg inline-block mr-5'>
              Box Office:{' '}
              <span className='font-bold'>{movieDetails.BoxOffice}</span>
            </p>
          </div>
          <div>
            <button
              onClick={handleBack}
              className='mt-4 px-6 py-2 bg-red-500 text-white rounded hover:bg-blue-600 transition duration-300'
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
