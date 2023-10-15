import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './components/MainPage';
import OurCompany from './components/OurCompany';
import Locations from './components/Locations';
import Contacts from './components/Contacts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/ourCompany",
    element: <OurCompany/>,
  },
  {
    path: "/locations",
    element: <Locations/>,
  },
  {
    path: "/contacts",
    element: <Contacts/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


