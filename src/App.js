import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ErrorPage from './containers/errorPage/error-page';
import HomePage from './containers/homePage/HomePage';
import Consulting from './containers/consulting/Consulting';
import { Navbar } from './components';
import Footer from './components/footer/Footer';
import './App.css';

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage />, errorElement: <ErrorPage /> },
      { path: '/consulting', element: <Consulting />, errorElement: <ErrorPage /> },
      { path: '/auditing', element: <Consulting />, errorElement: <ErrorPage /> },
      { path: '/politics', element: <Consulting />, errorElement: <ErrorPage /> },
      { path: '/svcsmore', element: <Consulting />, errorElement: <ErrorPage /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

const App = () => (
  <div className="App">
    <RouterProvider router={router} />
  </div>
);

export default App;
