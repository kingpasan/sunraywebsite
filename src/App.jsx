import React, { Suspense } from 'react'
import styles from './styles'
import { Loader } from './components'

const NavBar = React.lazy(() => import('./components/NavBar'))
const Footer = React.lazy(() => import('./components/Footer'))
const NavigationRouters = React.lazy(() => import('./navigations/Navigation'))

const App = () => (
  <Suspense fallback={<Loader />}>
    <div className='w-full'>

      <div className={`sticky top-0 z-10 ${styles.paddingX} ${styles.flexCenter} shadow-lg bg-white `}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <NavigationRouters />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart} bg-white shadow-lg`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>

    </div>
  </Suspense>
)

export default App
