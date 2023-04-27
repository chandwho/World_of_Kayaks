import React from 'react'

export default function Courses() {

  return (
    <div className='flex flex-col items-center p-3 mb-10'>
        <h3 className='text-2xl font-semibold mb-5'>Training Courses</h3>
        <div className='rounded-3xl border-2 border-black p-1 mb-5'>
            <button className='hover:bg-black hover:text-white rounded-3xl px-3 py-1'>Monthly</button>
            <button className='hover:bg-black hover:text-white rounded-3xl px-3 py-1'>Yearly</button>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-3'>
            <div className='flex flex-col items-center p-3 gap-4 shadow-xl rounded-xl'>
              <p className='bg-lime-600 text-white rounded-3xl py-2 px-4 border-2'>Basic</p>
              <div className='flex items-end mb-3'>
                <h3 className='font-semibold text-2xl'>$99</h3>
                <p className='text-xs'>/month</p>
              </div>
              <div className='flex flex-col items-center text-center justify-evenly text-xs gap-3'>
                <p>Premium travel kit</p>
                <p>Exclusive Trip</p>
                <p>Customer support</p>
                <p>Every Person Licence</p>
                <button className='bg-black text-white rounded-3xl py-2 px-4 border-2 hover:bg-white hover:text-black border-black text-xs'>Get Started</button>
              </div>
            </div>
            <div className='flex flex-col items-center p-3 gap-4 shadow-xl rounded-xl'>
              <p className='bg-green-600 text-white rounded-3xl py-2 px-4 border-2'>Standard</p>
              <div className='flex items-end mb-3'>
                <h3 className='font-semibold text-2xl'>$199</h3>
                <p className='text-xs'>/month</p>
              </div>
              <div className='flex flex-col items-center text-center justify-evenly text-xs gap-3'>
                <p>Premium travel kit</p>
                <p>Exclusive Trip</p>
                <p>Customer support</p>
                <p>Every Person Licence</p>
                <button className='bg-black text-white rounded-3xl py-2 px-4 border-2 hover:bg-white hover:text-black border-black text-xs'>Get Started</button>
              </div>  
            </div>  
            <div className='flex flex-col items-center p-3 gap-4 shadow-xl rounded-xl'>
              <p className='bg-teal-600 text-white rounded-3xl py-2 px-4 border-2'>Premium</p>
              <div className='flex items-end mb-3'>
                <h3 className='font-semibold text-2xl'>$299</h3>
                <p className='text-xs'>/month</p>
              </div>
              <div className='flex flex-col items-center text-center justify-evenly text-xs gap-3'>
                <p>Premium travel kit</p>
                <p>Exclusive Trip</p>
                <p>Customer support</p>
                <p>Every Person Licence</p>
                <button className='bg-black text-white rounded-3xl py-2 px-4 border-2 hover:bg-white hover:text-black border-black text-xs'>Get Started</button>
              </div>
            </div>
        </div>
        
    </div>
  )
}
