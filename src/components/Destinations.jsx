import React from 'react'
import { sigiriya } from '../assets'
import { countriesList } from '../constants'

const Destinations = () => {
    return (
        <section>
            <div className='flex flex-col justify-center p-10 text-center m-10 gap-5'>
                <div className='block text-4xl font-satisfy text-theme'>Choose Your</div>
                <div className='font-poppins text-4xl text-gray-700 font-bold'>Perfect Holiday</div>
                <div className='text-sm text-gray-400 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet soluta reiciendis architecto placeat rem est eligendi nesciunt consectetur molestiae consequuntur cupiditate quo, dolores enim, nam cum ut. Doloribus, distinctio impedit!</div>
            </div>
            <div className='flex  flex-wrap flex-col justify-center sm:flex-row pb-20 pl-5 pr-5 gap-5'>
                {
                    countriesList.map(({ id, path, title }) => (
                        <div className='flex flex-wrap flex-col items-center md:w-1/4 rounded-lg overflow-hidden relative '>

                            <img src={sigiriya} alt="" className='hover:blur-sm' />

                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-satisfy text-4xl text-white'>{title}</div>
                        </div>
                    ))
                }


            </div>
        </section>
    )
}

export default Destinations