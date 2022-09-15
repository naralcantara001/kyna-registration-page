import React from 'react'
import image from './image.png';

export default function Headline() {
  return (
    <div className='headline'>
      <p className='headline-title'>Discover the world’s top <br/>
developers and artists.</p>
<img className='image' src={image} alt="img" />
    </div>
  )
}
