import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { motion } from 'framer-motion';
import Landing from './pages/Landing';
import About from './pages/About';
import HorizontalGallery from './components/HorizontalGallery';
import Footer from './pages/Footer';
function App() {

  const [cursorVariant, setCursorVariant] = useState("default");

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 60,
      width: 60,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
    }
  }
  const style = {
    backgroundColor: "white",
    height: "32px",
    width: "32px",
    borderRadius: "50%",
    position: "fixed",
    top: 0,
    left: 0,
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const [cursorStyle, setCursorStyle] = useState(style);

  const mouseEnter = () => setCursorStyle({
    ...cursorStyle,
    backgroundColor: "black"
  })
  const mouseExit = () => setCursorStyle({
    ...cursorStyle,
    backgroundColor: "white"
  })


  return (
    <>
      <div className='grain-effect' />
      <Landing textEnter={textEnter} textLeave={textLeave} />
      <About mouseEnter={mouseEnter} mouseExit={mouseExit} />
      <div>
        <div className='rip' />
        <HorizontalGallery />
      </div>
      <Footer textEnter={textEnter} textLeave={textLeave}/>
      <motion.div className='cursor'
        style={cursorStyle}
        variants={variants}
        animate={cursorVariant} />
    </>
  );
}

export default App;
