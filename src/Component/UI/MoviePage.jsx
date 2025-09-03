import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from './MovieCard';

const MoviePage = () => {
  const movieData = useLoaderData();

  return (
    <div className='flex flex-wrap justify-center items-center mt-10 gap-5'>
      {movieData?.Search?.map((currentMovie) => {
        return (
          <MovieCard key={currentMovie.imdbID} currentMovie={currentMovie} />
        );
      })}
    </div>
  );
};

export default MoviePage;
