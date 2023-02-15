import React from 'react'
import { logo } from '../assets'

const Loader = () => {
    return (
        <section className={`flex flex-col justify-center p-10 text-center m-10 gap-5`} style={{ height: "100vh" }}>
            <div className='flex flex-col justify-center items-center'>
                <img src={logo} alt="Sunray Travels and Consultancy" width="124px" height="124px" className='animate-pulse' />
                <div className='m-10 font-poppins text-xl text-gray-500'>Loading Website. Please Wait!</div>
            </div>
        </section>
    )
}

export default Loader