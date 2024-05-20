import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Story from '../pages/Story.jsx';

const router = createBrowserRouter([
  {
    path: '/wesite-remastered/',
    element: <App />,
  },
  {
    path: '/wesite-remastered/story',
    element: <Story />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
