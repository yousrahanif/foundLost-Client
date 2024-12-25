import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import logo from '../assets/logo.jpg'
import { motion } from "framer-motion";



const Slider = () => {
  const [theme, setTheme] = useState('light');
const handleToggleTheme=()=>{
  setTheme(theme === 'light' ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light')
}
const sentenceVariant = {
  visible: {
    scale: [1, 1.2, 1], 
    color: ["#3b82f6", "#1d4ed8", "#3b82f6"], 
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};



    return (
        <div>
            <h1 className='text-center text-blue-400 font-bold text-3xl'>
            <Link className='' to="/">
<img  src={logo} className='w-12 h-12 rounded-full mt-2' alt="" />  
</Link> 
        <Typewriter
       
          words={['ReturnPoint: Where Lost Things Find Their Way Back']}  
          loop={Infinity}  
          cursor
          cursorStyle="|"  
          typeSpeed={100}  
          deleteSpeed={50}  
          delaySpeed={1000}  
        />
      </h1>

    
     
<Marquee className='m-4'>
🔍 Lost an item? Found something valuable? Let us help! Submit your details in the Lost and Found section below.  
    Stay updated with real-time information on recently found items and reports. 🚨
</Marquee>

<motion.div
        className="text-center text-lg font-semibold mt-6"
        variants={sentenceVariant}
        initial="hidden"
        animate="visible"
      >
        🔍 Lost something? Let us help you find it effortlessly!
      </motion.div>

<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1508819468694-557b5350e11d?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9zdHxlbnwwfHwwfHx8MA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Lost Belongings</h1>
          <p className="mb-5">
            Report items you've lost and let our community help you find them. Together, we make reconnecting with your belongings easy and efficient.
          </p>
          <button className="btn bg-blue-100">Report Lost Item</button>
        </div>
      </div>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide2" className="carousel-item relative w-full">
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1562206163-8affb99d5adf?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm91bmR8ZW58MHx8MHx8fDA%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Found Something?</h1>
          <p className="mb-5">
            Found an item someone might be missing? Submit the details and help reunite it with its rightful owner.
          </p>
          <button className="btn bg-blue-100">Submit Found Item</button>
        </div>
      </div>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide3" className="carousel-item relative w-full">
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1527467779599-34448b3fa6a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Browse Lost Items</h1>
          <p className="mb-5">
            Explore a list of reported lost items to see if something you’ve found matches a description.
          </p>
          <button className="btn bg-blue-100">View Lost Items</button>
        </div>
      </div>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide4" className="carousel-item relative w-full">
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Success Stories</h1>
          <p className="mb-5">
            Discover how our platform has reunited countless people with their lost belongings.
          </p>
          <button className="btn bg-blue-100">Explore Stories</button>
        </div>
      </div>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

        </div>
    );
};

export default Slider;