import React from 'react'
import LocationItem from './LocationItem'

export default function Locations() {
  return (
    <div className='px-10 flex flex-col items-center xl:flex-row lg:gap-5 lg:h-[400px]'>
        <div className='w-full xl:w-[22%] text-left'>
            <h3 className='font-semibold text-2xl'>Upcoming River Trip</h3>
            <p className='text-sm'>We take great pride in all of our amazing clear kayak adventures and we aim to give our guests the best.</p>
        </div>
        <div className='w-full xl:w-[78%] md:h-[350px] gap-8 flex flex-col items-center md:flex-row p-5 relative'>
            {/*Trip locations*/}
            <div className='md:absolute left-10 top-20'>
                <LocationItem
                img='https://images.unsplash.com/photo-1521336575822-6da63fb45455?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                place='RIVER TEIFI, WALES'
            />
            </div>
            <div className='md:absolute left-[150px] top-1/2'>
                <LocationItem
                img='https://images.unsplash.com/photo-1599555615178-92d94464ea2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
                place='RIVER WYE, WALES'
            />
            </div>
            <div className='md:absolute left-[260px] top-5'>
                <LocationItem
                img='https://images.unsplash.com/photo-1516817153573-7b617832a471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                place='GREAT GLEN CANOE TRAIL, SCOTLAND'
            />
            </div>
            <div className='md:absolute left-[370px] top-2/4 '>
                <LocationItem
                img='https://images.unsplash.com/photo-1596323718985-dc30d03b935f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                place='PORT ISSAC BAY, NORTH CORNWALL'
            />
            </div>
            <div className='md:absolute left-[480px] top-[15%]'>
                <LocationItem
                img='https://images.unsplash.com/photo-1516471835429-167f83503f4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGtheWFrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                place='RIVER ALLEN, NORTHUMBERLAND'
            />
            </div>
        </div>
    </div>
  )
}