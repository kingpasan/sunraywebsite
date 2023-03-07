import React from 'react'
import { bn_travel } from '../assets'
import ParallaxImage from './ParallaxImage'

const TravelBanner = () => {
  return (
    <section>
      <ParallaxImage backgroundImage={bn_travel}>
        <div className={`flex flex-col sm:py-32 py-12`}>
        </div>
      </ParallaxImage>
    </section>
  )
}

export default TravelBanner