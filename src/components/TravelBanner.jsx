import React from 'react'
import { bn_travel } from '../assets'
import ParallaxImage from './ParallaxImage'

const TravelBanner = () => {
  return (
    <section>
      <ParallaxImage backgroundImage={bn_travel}>
        <div className={`flex flex-col sm:py-32 py-12`}>
          <div className='font-satisfy text-6xl lg:text-9xl  text-center drop-shadow-xl text-white'>
            Sunray Travels
          </div>
        </div>
      </ParallaxImage>
    </section>
  )
}

export default TravelBanner