import React from 'react'
import { logo } from '../assets'
import styles from '../styles'
import { socialMedia, footerLinks } from '../constants'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>

      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="Sunray Travel and Consultancy"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`font-poppins font-normal text-[12px] leading-[30.8px] mt-4 max-w-[312px]`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem cum, quae facilis voluptatibus perferendis ratione optio quidem placeat, distinctio debitis saepe maxime enim dolor, illum quos iusto quis! Quasi, dolores.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">

        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] text-justify leading-[27px]">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-orange-500 hover:text-primary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                >
                  <a href={link.link}>
                    {link.name}
                  </a>

                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#e85c1b]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-theme">
        Copyright Ⓒ {new Date().getFullYear()} Sunray Travel & Consultancy. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
)

export default Footer