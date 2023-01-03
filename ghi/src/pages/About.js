import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
function About(props) {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const text1 = document.querySelector('.title-1');
        text1.innerHTML = text1.innerText.split('').map((char, i) => `<div class="char">${char}</div>`).join('');
        const text2 = document.querySelector('.title-2');
        text2.innerHTML = text2.innerText.split('').map((char, i) => `<div class="char2">${char}</div>`).join('');
        const text3 = document.querySelector('.title-3');
        text3.innerHTML = text3.innerText.split('').map((char, i) => `<div class="char3">${char}</div>`).join('');
        
        gsap.from(".char", {
            duration: .8,
            opacity: 0,
            y: 40,
            skewY: 20, // Animate characters from below the text element
            ease: "circ.out",
            stagger: .2,
            scrollTrigger: {
                trigger: ".title-1",
                start: "top 75%",
                end: "bottom center",
                scrub: 1,
            },
        });
        gsap.from(".char2", {
            duration: .8,
            opacity: 0,
            y: 40,
            skewY: 20, // Animate characters from below the text element
            ease: "circ.out",
            stagger: .2,
            scrollTrigger: {
                trigger: ".title-2",
                start: "top 75%",
                end: "bottom center",
                scrub: 1,
            },
        });
        gsap.from(".char3", {
            duration: .8,
            opacity: 0,
            y: 40,
            skewY: 20, // Animate characters from below the text element
            ease: "circ.out",
            stagger: -.2,
            scrollTrigger: {
                trigger: ".title-3",
                start: "top 75%",
                end: "bottom center",
                scrub: 1,
            },
        });
    }, []);



    return (
        <div className="main-two">

            <div className='about-wrapper'>
                <div className='about-content'>
                    <div className='about-title'>
                        <h1 className='title-1'>Dash</h1>
                        <br />
                        <h1 className='title-2'>of.</h1>
                        <br />
                        <h1 className='title-3'>Cooper</h1>

                    </div>
                    <div className='about-paragraph'>
                        i am a Junior Fullstack Developer and a recent
                        graduate of Hack Reactor's boot camp.
                    </div>
                </div>
            </div>



            <div className='project-introduction-wrapper'>
                <div className='project-introduction-content'>

                </div>
            </div>

        </div>
    )
}

export default About