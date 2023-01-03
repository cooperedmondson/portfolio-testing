import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Ghost from '../assets/Ghost.jpg'
import { useFetcher } from 'react-router-dom';

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
            skewY: 20,
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
            skewY: 20,
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
            skewY: 20,
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


    useEffect(() => {

        const image = document.querySelector(".ghost");
        const revealContainer = document.querySelector(".reveal");


        gsap.set(".reveal", { autoAlpha: 1 });
        gsap.from(".reveal", {
            xPercent: 100,
            ease: "power2.out",
            scrollTrigger: {
                trigger: revealContainer,
                toggleActions: "restart none none reset",
                scrub: 1,
            },
        }, 1.5);
        gsap.from(".ghost", {
            xPercent: -100,
            scale: 1.3,
            delay: -1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: image,
                toggleActions: "restart none none reset",
                scrub: 1,
            },
        }, "+=.5");

    }, []);




    return (
        <div className="main-two">

            <div className='flex items-center justify-between'>
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

                <div className='ghost-container'>
                    <div className='reveal'>
                        <img src={Ghost} className="ghost" />
                    </div>
                </div>
            </div>

            <div className='about-wrapper-two'>

                <div className='about-content-two'>
                    <div className='background-title'>
                        <h1 className='background-h1'>My</h1>
                        <br />
                        <h1 className='background-h1-2' >Background</h1>
                    </div>
                </div>
                <div className='about-content-three'>
                    <div className='image-wrap'>
                        <div className='image-content'>
                            <img alt='' className='image' />
                        </div>
                        <div className='biography-wrap'>
                            <div className='biography-content'>
                                <div className='bio'> </div>
                            </div>
                        </div>
                        <div className='image-content'>
                            <img alt='' className='image' />
                        </div>
                        <div className='biography-wrap'>
                            <div className='biography-content'>
                                <div className='bio'> </div>
                            </div>
                        </div>
                        <div className='image-content'>
                            <img alt='' className='image' />
                        </div>
                        <div className='biography-wrap'>
                            <div className='biography-content'>
                                <div className='bio'> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default About