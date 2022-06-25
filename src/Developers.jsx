import React from 'react'
import terminal from './assets/terminal.png'
const Developers = () => {
  return (
    <div className='w-full text-white bg-black'>
        <div className='max-w-[1240px] mx-auto px-4 py-16 md:flex'>
            <div>
                <h1 className='text-center font-bold'>Developers for FLEX developers</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quae, nobis aut id illum magni, ea sint adipisci aspernatur voluptates, eveniet atque cumque veniam dignissimos? Sint eligendi ex dolorum dolor?
            </p>
            </div>
            <div className='flex justify-center'>
                <img src={terminal} alt="/" className='max-w-[250px] shadow-lg shadow-cyan-500/50'/>
            </div>
        </div>
    </div>
  )
}

export default Developers