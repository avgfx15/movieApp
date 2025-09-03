import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import AppLayout from './Component/Layout/AppLayout';
import ErrorPage from './Pages/ErrorPage';
import MoviePage from './Component/UI/MoviePage';
import { getMovieData, getMovieDetails } from './API/GetAPIData';
import MovieDetails from './Component/UI/MovieDetails';
import contactFormData from './API/FormData';
import SerachPage from './Pages/SerachPage';
import ProfilePage from './Pages/ProfilePage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/movie',
          element: <MoviePage />,
          loader: getMovieData,
        },
        {
          path: '/movie/:movieId',
          element: <MovieDetails />,
          loader: getMovieDetails,
        },
        {
          path: '/about',
          element: <AboutPage />,
        },
        {
          path: '/contact',
          element: <ContactPage />,
          action: contactFormData,
        },
        {
          path: '/search',
          element: <SerachPage />,
        },
        {
          path: '/profile',
          element: <ProfilePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
