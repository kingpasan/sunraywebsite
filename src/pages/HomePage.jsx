import React from 'react'
import { Destinations, Hero, Services, Stats, TravelBanner } from '../components'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <TravelBanner />
      <Destinations/>
    </>
  )
}

export default HomePage