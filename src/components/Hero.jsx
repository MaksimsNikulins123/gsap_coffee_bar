import React from 'react'

const Hero = () => {
    return (
        <section id='hero' className='heroBackground'>
            <h1 className='title'>Espresso</h1>
            
            <img
                src='images/hero-bagOfFreashCoffeeBeans.png'
                alt='bag-of-fresh-coffee-beans'
                className='left-leaf'
            />
            <img
                src='images/hero-coffeeCup.png'
                alt='coffee cup'
                className='right-leaf'
            />
            <div className='body'>

            </div>
        </section>
    )
}

export default Hero