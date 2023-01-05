import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import JOBI from '../assets/JOBI.gif'

function About(props) {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const text1 = document.querySelector('.title-1');
        text1.innerHTML = text1.innerText.split('').map((char, i) => `<div class="char">${char}</div>`).join('');
        const text2 = document.querySelector('.title-2');
        text2.innerHTML = text2.innerText.split('').map((char, i) => `<div class="char2">${char}</div>`).join('');
        const text3 = document.querySelector('.title-3');
        text3.innerHTML = text3.innerText.split('').map((char, i) => `<div class="char3">${char}</div>`).join('');
        const text4 = document.querySelector('.featured-text2');
        text4.innerHTML = text4.innerText.split('').map((char, i) => `<div class="char4">${char}</div>`).join('');
        const text5 = document.querySelector('.featured-text');
        text5.innerHTML = text5.innerText.split('').map((char, i) => `<div class="char5">${char}</div>`).join('');
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
        gsap.from(".char4", {
            duration: .8,
            opacity: 0,
            y: 40,
            skewY: 20,
            ease: "circ.out",
            stagger: .2,
            scrollTrigger: {
                trigger: ".featured-text",
                start: "top 75%",
                end: "bottom center",
                scrub: 1,
            },
        });
        gsap.from(".char5", {
            duration: .8,
            opacity: 0,
            y: 40,
            skewY: 20,
            ease: "circ.out",
            stagger: -.2,
            scrollTrigger: {
                trigger: ".featured-text",
                start: "top 75%",
                end: "bottom center",
                scrub: 1,
            },
        });
    }, []);


    const imageRef = useRef(null);
    const imageContainerRef = useRef(null);



    useEffect(() => {
        setTimeout(() => {
            if (imageRef && imageContainerRef) {
                const image = document.querySelector(".ghost");
                const revealContainer = imageContainerRef.current;


                gsap.set(".reveal", { autoAlpha: 1 });
                gsap.from(".reveal", 1.5, {
                    xPercent: -100,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".ghost-container",
                        toggleActions: "restart none none reset",
                        scrub: 0.5,
                        markers: false,
                    },
                });
                gsap.from(".ghost", 1.5, {
                    xPercent: 100,
                    scale: 1.3,
                    delay: -1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".ghost-container",
                        toggleActions: "restart none none reset",
                        scrub: 0.5,
                        markers: false,
                    },
                });
            }
        }, 500);
    }, []);





    return (
        <div className="main-two">

            <div className='flex items-center justify-between overflow-hidden'>
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
                            i am a Junior Fullstack Developer and a
                            graduate of Hack Reactor's boot camp.
                        </div>
                    </div>
                </div>

            </div>
            <div className='ghost-container'>
                <div className='reveal' ref={imageContainerRef}>
                    <img src={JOBI} className="ghost" ref={imageRef} />
                </div>
            </div>


            <div className='featured-projects'>
                <div className='featured-container'>
                    <h1 className='featured-text2'>Projects</h1>
                    <h1 className='featured-text'>Featured</h1>
                </div>
                <div>

                </div>
            </div>

        </div>


    )
}

export default About