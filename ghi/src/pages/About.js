import React, { useState, useRef, useEffect } from 'react'
import HorizontalGallery from '../components/HorizontalGallery'

function About(props) {


    return (
        <div className="overflow-hidden" id='main-two'>
            <div className='rip-two' />

            <div className="w-screen h-screen bg-red-400" id='about-section'>

            </div>
            <div >
                <HorizontalGallery />
            </div>
            <div className="w-screen h-screen bg-green-400" id='project-section'>
            </div>
        </div>
    )
}

export default About