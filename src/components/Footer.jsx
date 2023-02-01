import React from 'react'
import { logo } from '../assets'
import styles from '../styles'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>

      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="Sunray Travel and Consultancy"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Sunray Travel and Consultancy Description text goes here
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
       Site map goes here
      </div>

    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#e85c1b]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-theme">
        Copyright Ⓒ 2023 Sunray Travel & Consultancy. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        Social media links goes here
      </div>
    </div>
  </section>
)

export default Footer