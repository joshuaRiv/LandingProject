import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './containers/errorPage/error-page';
import HomePage from './containers/homePage/HomePage';
import { Navbar } from './components';
import Footer from './components/footer/Footer';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => (
  <div className="App">
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </div>
);

export default App;
