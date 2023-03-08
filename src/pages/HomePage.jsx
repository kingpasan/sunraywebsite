import React from 'react'
import { Destinations, HeroSlide, Services, Stats, TravelBanner } from '../components'

const HomePage = () => {
  return (
    <>
      <HeroSlide />
      <Services />
      <Stats />
      <TravelBanner />
      <Destinations />
    </>
  )
}

export default HomePage