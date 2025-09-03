import { NavLink } from 'react-router-dom';

const HeaderLayout = () => {
  return (
    <div className='flex justify-between items-center p-4 text-white bg-gray-600 w-full px-10'>
      <div className='flex items-center'>
        <img src='/2.ico' alt='Logo' className='h-15' />
        <h1 className='text-2xl font-bold text-red ml-2 uppercase text-amber-500'>
          Stacodev
        </h1>
      </div>
      <div>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive
              ? 'text-xl mx-5 uppercase text-amber-500'
              : `text-xl mx-5 uppercase hover:text-amber-600`
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/movie'
          className={({ isActive }) =>
            isActive
              ? 'text-xl mx-5 uppercase text-amber-500'
              : `text-xl mx-5 uppercase hover:text-amber-500`
          }
        >
          Movie
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive
              ? 'text-xl mx-5 uppercase text-amber-500'
              : `text-xl mx-5 uppercase hover:text-amber-500`
          }
        >
          About
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive
              ? 'text-xl mx-5 uppercase text-amber-500'
              : `text-xl mx-5 uppercase hover:text-amber-600`
          }
        >
          Contact
        </NavLink>
      </div>
      <NavLink
        to='/search'
        className='text-xl mx-5 uppercase text-white-500 hover:text-amber-600'
      >
        <button className='uppercase'>Search</button>
      </NavLink>
      <NavLink
        to='/profile'
        className='text-xl mx-5 uppercase text-white-500 hover:text-amber-500'
      >
        Profile
      </NavLink>
    </div>
  );
};

export default HeaderLayout;
