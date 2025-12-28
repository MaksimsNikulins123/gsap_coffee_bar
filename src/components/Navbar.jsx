import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants"
import gsap from "gsap";
import { duration } from './../../node_modules/zod/v4/core/regexes';

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        })

        navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        })
    });



    return (
        <nav>
            <div>
                <a href="#home" className="flex item-center gap-2">
                    <img src="images/logo.png" width={32} height={32} alt="logo" />
                    <p>Steamy Cups</p>
                </a>
                <ul>
                    {navLinks.map((navLink) => (
                        <li key={navLink.id}>
                            <a href={`#${navLink.id}`}>{navLink.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar