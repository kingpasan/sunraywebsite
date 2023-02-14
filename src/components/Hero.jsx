import React from 'react'
import styles from '../styles'
import { bg_test } from '../assets'

const Hero = () => {
  return (
    <section id='start' className={`flex md:flex-row flex-col ${styles.paddingY}`} style={{ height: "100vh", backgroundImage: `url(${bg_test})`}}>

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-theme ss:leading-[100.8px] leading-[75px] w-full">
          Sunray Travel & Consultancy
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad temporibus error, ipsum amet molestiae quibusdam cumque quae, iure sunt rem in. Alias quos ullam dolore. Laudantium harum delectus ipsum.
        </p>

      </div>

    </section>
  )
}

export default Hero