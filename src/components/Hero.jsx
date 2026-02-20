import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { SplitText } from 'gsap/all'
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';


const Hero = () => {
    const videoRef = useRef();

    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const heroSplit = new SplitText(".title", {
            type: "chars, words",
        });

        const paragraphSplit = new SplitText(".subtitle", {
            type: "lines",
        });

        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
            delay: 1,
        });

        gsap
            .timeline({
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            })
            .to(".coffee-beans-bag", { y: 200 }, 0)
            .to(".coffee-machine-and-coffee", { y: -200 }, 0)
            .to(".arrow", { y: 100 }, 0);

        const startValue = isMobile ? "top 50%" : "center 60%";
        const endValue = isMobile ? "120% top" : "bottom top";

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            },
        });

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
            });
        };
    }, [])
    return (
        <>
            <section id='hero' className='heroBackground'>
                {/* <section id='hero' className='noisy'> */}
                <h1 className='title'>Espresso</h1>

                <img
                    src='images/coffee-machine-and-coffee.png'
                    alt='offee machine and coffee'
                    className='coffee-machine-and-coffee'
                />
                <img
                    src='images/coffee-beans-bag.png'
                    alt='coffee beans bag'
                    className='coffee-beans-bag'
                />
                <div className='body'>
                    <div className='content'>
                        <div className='space-y-5 hidden md:block'>
                            <p>Bold. Pure taste. Classic.</p>
                            <p className='subtitle'>
                                Taste the spirit <br /> of coffee <br /> in every sip
                            </p>
                        </div>
                        <div className="view-coffee">
                            <p className="subtitle">
                                Every coffee on our menu is a blend of premium beans,
                                crafted expertise, and timeless recipes — designed to delight your senses.
                            </p>
                            <a href="#typeOfDrinks">View coffee</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="video absolute inset-0">
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    preload="auto"
                    src="/videos/coffee.mp4"
                />
            </div>
        </>
    )
}

export default Hero