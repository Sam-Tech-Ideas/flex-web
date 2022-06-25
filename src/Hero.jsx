import React from 'react'
import heroVid from './assets/video.mp4'
const Hero = () => {
  return (
    <div className='w-full h-[60vh] top-[90px] '>
       <video src={heroVid} className='object-cover h-full w-full absolute -z-10 ' autoPlay loop muted ></video>
   <div className='text-white text-center w-full h-[90%] flex-col justify-center px-4 flex items-center '>
    <h1>Decentraled</h1>
    <h2>how to dsfln dj jfl jkdkln</h2>
  <p> adipisicing elit. C corrupti, nim magni. Beatae?</p>
   </div>
   
    </div>
  )
}

export default Hero