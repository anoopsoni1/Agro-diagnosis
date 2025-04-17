import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home' 
import Shop from './Components/Shop'
import Community from './Components/Community'
import Cropdetail from './Components/Cropdetail'
import Diagonose from './Components/Diagonose'
const routes = createBrowserRouter([
  {
    path: "" ,
    element : <Layout />,
    children : [
      {
        path: "" ,
         element : <Home />
      },
       {
    path : "/shop" ,
     element : <Shop />
       }, 
       {
        path: '/community', 
        element : <Community />
       } ,
       {
        path : "/cropdetail" ,
         element : <Cropdetail />
       } ,
       {
        path: "/diagonis" ,
        element : <Diagonose />
       }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={routes} />
  </StrictMode>,
)
