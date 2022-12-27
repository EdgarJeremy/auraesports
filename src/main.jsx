import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/web.css';

import Landing from './routes/landing';
import Front from './routes/front';
import Index from './routes/front/index';
import Divisions from './routes/front/divisions';
import Schedules from './routes/front/schedules';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/front/",
    element: <Front />,
    children: [{
      path: "",
      element: <Index />
    }, {
      path: "division",
      element: <Divisions />
    }, {
      path: "schedules",
      element: <Schedules />
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
