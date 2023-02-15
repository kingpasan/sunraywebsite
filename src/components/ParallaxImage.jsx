import React from 'react'
import { Parallax } from 'react-parallax'

const ParallaxImage = ({ backgroundImage, alt, blur, style, className, children }) => {
    return (
        <Parallax bgImage={backgroundImage} bgImageAlt={alt} blur={blur} strength={200} style={style} className={className} >
            {children}
        </Parallax>
    )
}

export default ParallaxImage