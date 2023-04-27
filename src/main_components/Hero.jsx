import React from 'react'

export default function Hero() {
  return (
    <div className='flex flex-col items-center px-10 pt-10 text-center'>
        <div className='md:w-[85%] text-center'>
            <h1 className='text-5xl md:text-6xl xl:text-8xl font-extrabold mb-8'>KAYAKING</h1>
            <p className='mb-6 text-sm md:text-[14px] px-20'>Take a 100% clear kayak guided tour with us today! 
                We take you where there is a world of wonder around you, but also, under you!
            </p>
        </div>
        <div className='flex flex-col md:flex-row relative'>
            <div className='flex flex-col items-center md:block'>
                <img src="https://logowik.com/content/uploads/images/tripadvisor-2021-travellers-choice-best-of-the-best9344.jpg" 
                alt="Traveller's choice logo"
                className='md:absolute w-20'
                />
                <img src="https://m.media-amazon.com/images/I/51B3SxZ4KFL._SL1280_.jpg" 
                alt="Image of kayak" 
                className='w-full md:w-[85%]'
                />
            </div>
            <div className='flex flex-col items-center'>
                <img src="https://media.istockphoto.com/id/580097360/photo/smiling-kayaker-standing-with-kayak.jpg?s=612x612&w=0&k=20&c=SQs8tY6NGGkV3EKXw2TYoX4YOaA_W2bhPnLx6iQCRfg=" 
                alt="Man with kayak"
                className='w-[100px] md:w-[300px]'
                />
                <button className='border-2 border-black rounded-3xl px-5 py-2 hover:bg-black hover:text-white'>Let's start</button>
            </div>
        </div>
    </div>
  )
}

