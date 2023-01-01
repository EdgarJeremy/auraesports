import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/web.css';

import Landing from './routes/landing';
import Front from './routes/front';
import Index from './routes/front/index';
import Divisions from './routes/front/divisions';
import Schedules from './routes/front/schedules';
import UpdateMedias from './routes/front/update-and-media';
import Community from './routes/front/community';
import Company from './routes/front/company';

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
    }, {
      path: "update-media",
      element: <UpdateMedias />
    }, {
      path: "community/:menu?",
      element: <Community />
    },{
      path: "company",
      element: <Company />
    }]
  }
], { basename: '/' })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
