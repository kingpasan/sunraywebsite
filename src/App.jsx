import React from 'react'
import styles from './styles'
import { NavBar, Footer, Hero } from './components'

const App = () => (
  <div className='w-full'>

    <div className={`sticky top-0 z-10 ${styles.paddingX} ${styles.flexCenter} shadow-lg bg-white`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
       <Hero/>
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer/>
      </div>
    </div>

  </div>
)

export default App
