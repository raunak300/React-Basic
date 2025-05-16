import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Routes from './Routes.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import User from './components/User/User.jsx'
import Github, { callApi } from './components/Github/Github.jsx'
const router = createBrowserRouter([ //array

  {//main path
    path: '/',
    element: <Routes/>,
    children:[
      {path:"",
        element: <Home/>
      },{
      path:"/about",
        element: <About/>
      },
      {
        path:"/user/:userid",
        element: <User/>
      
      },
      {
        path:"/github",
        element: <Github/>,
        loader: callApi
      ,
      }
    ]
  }
  ,
  {
    path:'/login',
    element:<Login/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
