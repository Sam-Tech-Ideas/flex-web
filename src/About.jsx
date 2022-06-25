import React from 'react'
import {SiAlltrails,SiHiveBlockchain,SiStrapi,SiAlpinedotjs} from 'react-icons/si'
const About = () => {
  return (
    <div className=' bg-black'>
    <div className='max-w-[1240px] mx-auto px-4 py-16 text-white'>
    <div>
        <h1 className='text-center'>A GROWING eCOSYSTEM</h1>
        <p className='py-4 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut ipsum minus, dolore voluptates enim iure est quo impedit voluptatem deleniti autem tenetur odio corporis id officia aspernatur cumque perferendis!
        </p>
   <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
    <div className='flex flex-col border text-left rounded-2xl py-12 px-8 '>
<div className=' inline-flex text-center '> 
    <SiAlltrails  className='bg-blue-500 rounded-full p-2' size={40}/>
     </div>
    <h3 className='text-xl font-bold'>Lorem ipsum ta, quos iusto rerum, fugit delectus quae  architecto.</h3>
    <p>Lorem, ipsum dolor sit amet consectetur
         adipisicing elit. Unde repellat deserunt 
         veniam placeat alias iste iure ratione 
         officiis vitae enim. Quaerat laudantium perspiciatis 
         adipisci quas vero. Soluta neque nihil molestias.</p>
    </div>
    <div className='flex flex-col border text-left rounded-2xl py-12 px-8 '>
<div className=' inline-flex text-center '> 
    <SiHiveBlockchain  className='bg-blue-500 rounded-full p-2' size={40}/>
     </div>
    <h3 className='text-xl font-bold'>Lorem ipsum ta, quos iusto rerum, fugit delectus quae  architecto.</h3>
    <p>Lorem, ipsum dolor sit amet consectetur
         adipisicing elit. Unde repellat deserunt 
         veniam placeat alias iste iure ratione 
         officiis vitae enim. Quaerat laudantium perspiciatis 
         adipisci quas vero. Soluta neque nihil molestias.</p>
    </div>
    <div className='flex flex-col border text-left rounded-2xl py-12 px-8 '>
<div className=' inline-flex text-center '> 
    <SiStrapi  className='bg-blue-500 rounded-full p-2' size={40}/>
     </div>
    <h3 className='text-xl font-bold'>Lorem ipsum ta, quos iusto rerum, fugit delectus quae  architecto.</h3>
    <p>Lorem, ipsum dolor sit amet consectetur
         adipisicing elit. Unde repellat deserunt 
         veniam placeat alias iste iure ratione 
         officiis vitae enim. Quaerat laudantium perspiciatis 
         adipisci quas vero. Soluta neque nihil molestias.</p>
    </div>
    <div className='flex flex-col border text-left rounded-2xl py-12 px-8 '>
<div className=' inline-flex text-center '> 
    <SiAlpinedotjs className='bg-blue-500 rounded-full p-2' size={40}/>
     </div>
    <h3 className='text-xl font-bold'>Lorem ipsum ta, quos iusto rerum, fugit delectus quae  architecto.</h3>
    <p>Lorem, ipsum dolor sit amet consectetur
         adipisicing elit. Unde repellat deserunt 
         veniam placeat alias iste iure ratione 
         officiis vitae enim. Quaerat laudantium perspiciatis 
         adipisci quas vero. Soluta neque nihil molestias.</p>
    </div>
</div>
</div>
    </div>
    </div>
  )
}

export default About