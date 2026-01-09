import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { SplitText } from 'gsap/all'


const Hero = () => {

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
    }, [])
    return (
        <section id='hero' className='heroBackground'>
            <h1 className='title'>Espresso</h1>

            <img
                src='images/coffee-machine-and-coffee.png'
                alt='bag-of-fresh-coffee-beans'
                className='coffee-machine-and-coffee'
            />
            <img
                src='images/coffee-beans-bag.png'
                alt='coffee cup'
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
    )
}

export default Hero