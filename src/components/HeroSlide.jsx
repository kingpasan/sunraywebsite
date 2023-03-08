import React from 'react'
import HeroSlider, { Slide, Overlay, MenuNav } from 'hero-slider'
import styles from '../styles'
import { bg_1, bg_2, bg_3 } from '../assets'

const HeroSlide = () => {
  return (
    <HeroSlider
      height={"100vh"}
      autoplay={{
        autoplayDebounce: 1000,
      }}
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
      }
      }
    >
      <Overlay>
        <div className="flex md:flex-row flex-col justify-center items-center w-full h-full m-0 p-0 drop-shadow-xl">
          <div className='md:ml-2 p-5 sm:ml-100 rounded-xl bg-whiteTrans'>
            <h1 className="font-orbitron text-5xl md:text:3xl text-white subpixel-antialiased text-center drop-shadow-2xl">Sunray Travels & Consultancy</h1>
          </div>
        </div>
      </Overlay>

      <Slide
        shouldRenderMask
        label="Testing Slide - ountry"
        background={{
          backgroundImageSrc: bg_1,
          backgroundAnimation: 'zoom',
          shouldLazyLoad: true
        }}
      />

      <Slide
        shouldRenderMask
        label="Testing Slide - ountry"
        background={{
          backgroundImageSrc: bg_2,
          backgroundAnimation: 'zoom',
          shouldLazyLoad: true
        }}
      />

      <Slide
      shouldRenderMask
        label="Testing Slide - ountry"
        background={{
          backgroundImageSrc: bg_3,
          backgroundAnimation: 'zoom',
          shouldLazyLoad: true
        }}
      />


      <MenuNav />

    </HeroSlider>
  )
}

export default HeroSlide