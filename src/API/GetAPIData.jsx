import React from 'react';

export const getMovieData = async () => {
  try {
    const result = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${
        import.meta.env.VITE_MOVIE_API_KEY
      }&s=batman`
    );

    const data = await result.json();
    return data;
  } catch (error) {
    console.error('Error fetching API data:', error);
    throw error;
  }
};

export const getMovieDetails = async ({ params }) => {
  const { movieId } = params;
  console.log(movieId);
  try {
    const result = await fetch(
      `http://www.omdbapi.com/?i=${movieId}&apikey=${
        import.meta.env.VITE_MOVIE_API_KEY
      }`
    );

    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching API data:', error);
    throw error;
  }
};
