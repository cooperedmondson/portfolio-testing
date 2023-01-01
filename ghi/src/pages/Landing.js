import React, { useState, useRef, useEffect } from 'react';
import Rip from '../assets/Rip.svg';

function Landing() {
  return (
    <div className="main-1">

      <div className='grain-effect'/>

      <nav className=' bg-transparent text-white uppercase font-semibold' id='col-3'>
        <div className='bg-transparent'>
          <a className="a" href='#about' id='animate'>About</a>
          <br />
          <a className="a" href='#projects' id='animate'>Projects</a>
        </div>
        <div className='bg-transparent'>
          <a id='animate' className="a" href='https://github.com/cooperedmondson'>Github</a>
          <br />
          <a id='animate' className="a" href='#contact'>Contact</a>
        </div>
      </nav>
      <div className='rip'/>
        
      

    </div>
  )
}

export default Landing