import React from 'react'
import styles from '../styles'
import { sigiriya } from '../assets'
import ParallaxImage from './ParallaxImage'

const Hero = () => {
  return (
    <section id='start' >
      <ParallaxImage backgroundImage={sigiriya}>
        <div className={`flex md:flex-row flex-col sm:py-32 py-12`} style={{ height: "100vh" }}>
          <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-theme ss:leading-[100.8px] leading-[75px] w-full">
              Sunray Travel & Consultancy
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad temporibus error, ipsum amet molestiae quibusdam cumque quae, iure sunt rem in. Alias quos ullam dolore. Laudantium harum delectus ipsum.
            </p>

          </div>
        </div>

      </ParallaxImage>


    </section>
  )
}

export default Hero