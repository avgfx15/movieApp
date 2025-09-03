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

  try {
    const result = await fetch(
      `http://www.omdbapi.com/?i=${movieId}&apikey=${
        import.meta.env.VITE_MOVIE_API_KEY
      }`
    );

    const data = await result.json();

    return data;
  } catch (error) {
    console.error('Error fetching API data:', error);
    throw error;
  }
};
