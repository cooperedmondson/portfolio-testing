import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

function HorizontalGallery() {
    gsap.registerPlugin(ScrollTrigger);
    const scroller = useRef();
    const skills = useRef();

    useEffect(() => {
        let skillSet = gsap.utils.toArray('.skill-set');

        let to = gsap.to(skillSet, {
            xPercent: () => -100 * (skillSet.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: scroller.current,
                markers: false,
                pin: true,
                pinSpacing: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
                snap: 1 / (skillSet.length - 1),

                end: () => '+=' + window.innerWidth,
            },
        });

        return () => {
            to.kill();
        };
    }, []);
    return (
        <div className="overflow-hidden flex">
            <div className="overflow-hidden ">
                <div
                    id="skills"
                    ref={scroller}
                    className=" flex overflow-x-hidden text-white w-[400vw] m-0 bg-gray-900  relative h-screen"
                >
                    <div
                        ref={skills}
                        className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
                    >
                        <img
                            src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="1st image"
                            layout="fill"
                            objectFit="contain"
                            className="max-w-[70vw] max-h-[60vh] m-auto"
                        />
                    </div>
                    <div
                        ref={skills}
                        className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
                    >
                        <img
                            src="https://images.pexels.com/photos/2902536/pexels-photo-2902536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="2ndimage"
                            layout="fill"
                            objectFit="contain"
                            className="max-w-[70vw] max-h-[60vh] m-auto"
                        />
                    </div>
                    <div
                        ref={skills}
                        className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
                    >
                        <img
                            src="https://images.pexels.com/photos/1089194/pexels-photo-1089194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="2ndimage"
                            layout="fill"
                            objectFit="contain"
                            className="max-w-[70vw] max-h-[60vh] m-auto"
                        />
                    </div>
                    <div
                        ref={skills}
                        className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
                    >
                        <img
                            src="https://images.pexels.com/photos/1601775/pexels-photo-1601775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="2ndimage"
                            layout="fill"
                            objectFit="contain"
                            className="max-w-[70vw] max-h-[60vh] m-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalGallery