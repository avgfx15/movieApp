import React from 'react';

const AboutPage = () => {
  return (
    <div className='my-10 flex flex-col justify-center h-[80%] m-auto'>
      <div className='w-[85%] m-auto'>
        <h1 className='text-2xl font-bold mt-5'>Details About Us</h1>
        <div className='mt-5'>
          <p className='text-lg text-justify leading-7'>
            This is a movie web application built using React and React Router
            DOM. It provides information about various movies, including their
            titles, release dates, genres, and more. Users can explore movie
            details and navigate through different pages seamlessly.
          </p>
        </div>
        <div className='mt-5 text-lg text-justify leading-7'>
          <h1 className='text-2xl font-bold mt-5'>Our Story</h1>
          <div className='mt-5'>
            <p className='text-lg text-justify leading-7'>
              The Stacodev Movie App was born from a simple idea: that finding
              the next great movie shouldn't be a chore. We’re a team of
              software developers who are also avid moviegoers, and we found
              ourselves constantly wishing for a better, more unified way to
              explore the world of film.
            </p>
            <p className='text-lg text-justify leading-7 mt-5'>
              So, we decided to build it ourselves. We started with the core
              essentials: a comprehensive database, a clean interface, and
              powerful search functionality. From there, we’ve been continually
              adding features that we, as users, would want—like personal
              watchlists, detailed cast and crew bios, and a beautiful UI.
            </p>
            <p className='text-lg text-justify leading-7 my-5'>
              This app is a testament to our love for movies and our commitment
              to building high-quality software. We’re constantly working to
              improve and expand the Stacodev experience, and we’re grateful to
              have you as part of our community.
            </p>
          </div>
        </div>
        <div className='mt-5 text-lg text-justify leading-7'>
          <h1 className='text-2xl font-bold mt-5'>What We Offer:</h1>
          <ul className='list-disc list-inside mt-5'>
            <li className='mb-2'>
              Comprehensive Movie Database: Access detailed information about
              thousands of movies from various genres and eras.
            </li>
            <li className='mb-2'>
              User-Friendly Interface: Navigate through the app with ease using
              our intuitive design.
            </li>
            <li className='mb-2'>
              Movie Reviews and Ratings: Read reviews and check ratings to help
              you decide what to watch.
            </li>
            <li className='mb-2'>
              Personalized Recommendations: Get movie suggestions based on your
              viewing history and preferences.
            </li>
            <li className='mb-2'>
              Watchlists: Create and manage your own watchlists to keep track of
              your favorite movies.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
