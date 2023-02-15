import React from 'react'
import { services } from '../constants'

const Services = () => {
    return (
        <section>
            <div className='flex flex-col justify-center p-10 text-center m-10 gap-5'>
                <div className='block text-4xl font-satisfy text-theme'>Our Services</div>
                <div className='font-poppins text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est porro maxime eligendi, dolore quasi hic tenetur beatae reiciendis, nam nesciunt pariatur blanditiis aperiam laborum fugiat. Perferendis ad odio vel! Esse.</div>
            </div>
            <div className='flex flex-col justify-center sm:flex-row pb-20 pl-20 pr-20 gap-10'>
                {services.map(({ id, image, title, description }) => (
                    <div className='flex flex-wrap flex-col items-center md:w-1/2' key={id}>
                        <div className='bg-primary hover:bg-themeTransOrange rounded-full p-10 mb-5'>
                            <img src={image} alt={title} className='w-[64px] h-[64px]' />
                        </div>
                        <div className='text-center'>
                            <span className='font-poppins block font-semibold text-lg text-theme'>{title}</span>
                            <span className='block font-extralight text-sm text-gray-500'>{description}</span>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Services