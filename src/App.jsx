import React from 'react'
import styles from './styles'
import { NavBar, Footer } from './components'
import NavigationRouters from './navigations/Navigation'

const App = () => (
  <div className='w-full'>

    <div className={`sticky top-0 z-10 ${styles.paddingX} ${styles.flexCenter} shadow-lg bg-white `}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <NavigationRouters/>
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart} bg-white`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>

  </div>
)

export default App
