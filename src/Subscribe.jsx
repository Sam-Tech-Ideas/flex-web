import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full px-4 py-16 bg-black text-white text-center'>
        <h1>Join Our FLEX Community</h1>
        <div>
            <input type="email" placeholder='Enter your email' className='rounded-2xl p-1 m-3 font-bold'/>
            <button>Sign Up</button>
        </div>
        <div className='flex items-center justify-center py-2'>
            <input className='mr-2' type="checkbox" />
            <p>Yes, I agree to receive email communication from FLEX</p>

        </div>
    </div>
  )
}

export default Subscribe