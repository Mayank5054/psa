// import logo from './logo.svg';
import './App.css';
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Logo } from './component/logo';
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navigation from './component/Navigation';
import About from './component/about';
import Home from './component/Home';
function domit() {
  var position = document.getElementById("slider_movable");
  console.log(position);
}
function App() {

  var location = useLocation();
  // tar.style.color="var(--primary-color)";
  
  return (
    <>
      <div className='main_container'>
        <Navigation></Navigation>
        <AnimatePresence mode='wait'>
          <Routes key={location.pathname} location={location}>
            <Route index path="/home" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/project" element={<About></About>}></Route>
            <Route path="/service" element={<About></About>}></Route>
          </Routes>
        </AnimatePresence>
        <div className='footer_div'>

        </div>
      </div>
    </>
  );
}

export default App;
