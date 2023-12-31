import React from 'react'
import PhoneImg from './images/phone.svg'
import { useGlobalContext } from './Context'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-center'>
            <article className='hero-info'>
                <h1>
                    Payments Infrastructure <br />
                    for the Internet
                </h1>
                <p>
                Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
                </p>
                <button className='btn'>Start Now</button>
            </article>
            <article className='hero-images'>
                <img src={PhoneImg} alt='phone-img' className='phone-img' />
            </article>
        </div>
    </section>
  )
}

export default Hero