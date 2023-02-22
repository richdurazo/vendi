import React from 'react'
import bImage from '../assets/images/create-or-browse.png'
export const Hero = (props: any) => {
  return (
     <section style={{
        backgroundImage: `url(${bImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: 'auto',
     }} className='hero-container'>{props.children}</section>
  )
}
