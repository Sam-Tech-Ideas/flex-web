import React,{useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'



function App() {
  const [nav,setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='w-full h-[90px] bg-black'>
      <div className='max-w-[1240px] mx-auto px-4 flex justify-between h-full items-center'>
        <div>
          <h1 className='text-green-600'>FLEX </h1>
          </div>
      <div className='hidden md:flex'>
      <ul className='text-white flex'>
        <li>Platform</li>
        <li>Developers</li>
        <li>Community</li>
        <li>About</li>
        <button className='text-white ml-4 '>
        Sign Up
      </button>
      </ul>
      </div>

      <div className='block md:hidden' onClick={handleNav}>
{nav ? <AiOutlineClose size={30} className="text-white"/>  :  <AiOutlineMenu size={30} className="text-white"/>}


      </div>
      <div className={nav ? 'w-full  md:hidden bg-black text-white absolute top-[90px] left-0 flex justify-center text-center ' : "absolute left-[-100%] block md:hidden"}>
      <ul >
        <li className='text-2xl'>Platform</li>
        <li className='text-2xl'>Developers</li>
        <li className='text-2xl'>Community</li>
        <li className='text-2xl'>About</li>
        <button className='text-white  m-8'>
        Sign Up
      </button>
      </ul>
      </div>
      </div>
    </div>
  )
}

export default App