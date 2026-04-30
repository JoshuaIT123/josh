import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Blog from './Blog.jsx'
import { RouterProvider } from 'react-router-dom'



const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    
      <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='About' element={<About />}/>
      <Route path='blog' element={<Blog />}/>
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
