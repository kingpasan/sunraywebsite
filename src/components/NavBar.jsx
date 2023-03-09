import React, { useState } from 'react'
import { logo, menu, close } from '../assets'
import { navLinks } from '../constants'
import LanguageNav from './LanguageNav'

const NavBar = () => {

  const [isToggle, setisToggle] = useState(false)

  return (
    <nav className="w-full flex py-3 justify-between items-center">

      <a href='/'>
        <img src={logo} alt="Sunray Travels and Consultancy" className="w-[128px] h-[64px]" />
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 text-theme`} >
            <a href={`${nav.path}`}>
              {nav.title}
            </a>
          </li>
        ))}
        <li>
          <LanguageNav/>
        </li>
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>

        <img src={isToggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain text-theme'
          onClick={() => setisToggle((prev) => !prev)} />

        <div className={`${isToggle ? 'flex' : 'hidden'} p-6 bg-theme-gradient  absolute top-24 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white`} >
                <a href={`${nav.path}`}>
                  {nav.title}
                </a>
              </li>
            ))}
            <li>
              <LanguageNav/>
            </li>
          </ul>
        </div>

      </div>

    </nav>
  )
}

export default NavBar