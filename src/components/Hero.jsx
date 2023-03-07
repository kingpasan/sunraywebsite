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
              Sunray Travels & Consultancy
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
            Sunray Travels and Consultancy is a travel agency based in Sweden that was established in 2005 by Sarath Wattegedara. The company has gained a reputation for providing reliable and trustworthy travel services, including air ticketing, tour planning, hotel booking, visa consultation, and more. Sunray Travels and Consultancy specializes in tours to popular destinations such as Sri Lanka, India, Thailand, and other Southeast Asian countries. With its commitment to quality customer service and attention to detail, Sunray Travels and Consultancy has become a trusted name in the travel industry.
            </p>

          </div>
        </div>

      </ParallaxImage>


    </section>
  )
}

export default Hero