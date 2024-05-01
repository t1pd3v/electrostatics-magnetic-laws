import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/home.jsx'

import Laws_electrostatics from './pages/laws-electrostatics/laws.jsx'
import Ohm from './pages/laws-electrostatics/ohm.jsx'
import Faraday from './pages/laws-electrostatics/faraday.jsx'
import Tesla from './pages/laws-electrostatics/tesla.jsx'
import Ampere from './pages/laws-electrostatics/ampere.jsx'

import Laws_magnetic from './pages/laws-magnetic/law-magnetic.jsx'
import Columb from './pages/laws-magnetic/columb.jsx'
import Maxwell from './pages/laws-magnetic/maxwell.jsx'
import Gauss from './pages/laws-magnetic/gauss.jsx'


import Biographys from './pages/biographys/biography.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/laws-electrostatics",
    element: <Laws_electrostatics/>,
  },
  {
    path: "/laws-electrostatics/ohm",
    element: <Ohm/>,
  },
  {
    path: "/laws-electrostatics/faraday",
    element: <Faraday/>,
  },
  {
    path: "/laws-electrostatics/tesla",
    element: <Tesla/>,
  },
  {
    path: "/laws-electrostatics/ampere",
    element: <Ampere/>,
  },
  {
    path: "/laws-magetic",
    element: <Laws_magnetic/>,
  },
  {
    path: "/laws-magetic/columb",
    element: <Columb/>,
  },
  {
    path: "/laws-magetic/maxwell",
    element: <Maxwell/>,
  },
  {
    path: "/laws-magetic/gauss",
    element: <Gauss/>,
  },
  {
    path: "/biographys",
    element: <Biographys/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
