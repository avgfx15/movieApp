import React from 'react';
import { NavLink, useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  if (!error) {
    return null;
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen gap-5'>
      <img
        src='https://syhzhuelbxgnhopnwjgc.supabase.co/storage/v1/object/public/media/blog/404_page_cover.jpg'
        alt='Error Page'
      />
      <h1 className='text-3xl font-bold'>404 Error Page Not Found</h1>
      <p>{error.statusText || error.message}</p>
      <button className='p-2 bg-blue-500 text-white rounded ml-2'>
        <NavLink to='/'>Go To Home Page</NavLink>
      </button>
      <button
        className='p-2 bg-red-500 text-white rounded ml-2'
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
