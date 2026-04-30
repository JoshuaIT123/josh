import React from "react";
import { BrowserRouter, Routes, Route, Link, Router, Outlet} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";

export default function App(){
return(
<>
<div className="text-xl font-bold tracking-wide bg-white">
    <nav className="flex items-center justify-between px-6 py-4 bg-grey-900 shadow-sm">
        <ul className="flex space-x-6">
            <li>
                <Link to="/" className="text-gray-700 font-medium hover:text-black transition" >Home/</Link>
               <Link to="/about"  className="text-gray-700 font-medium hover:text-black transition"  >About/</Link>
               <Link to="/Blog"  className="text-gray-700 font-medium hover:text-black transition">blog</Link>
            </li>
        </ul>
        <div className="text-xl font-bold tracking-wide">
  MyLogo
</div>
    </nav>
</div>
<Outlet />
  <footer className="bg-gray-900 text-gray-300 text-center py-8">
          © {new Date().getFullYear()} MyLogo. All rights reserved.
        </footer>
</>
)  
}



