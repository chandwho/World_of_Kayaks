import React from 'react'
import {BsBookmarkFill} from 'react-icons/bs'

export default function Blogs() {
  return (
    <div className='p-5 flex flex-col items-center'>
        <div className='flex flex-col md:flex-row justify-between items-center mb-7 w-full'>
            <div>
                <h3 className='font-semibold text-2xl'>Blogs & Articles</h3>
                <p className='text-xs'>Read our exclusive blogs and articles</p>
            </div>
            <a href="" className='underline text-xs'>See All</a>
        </div>
        <div className='flex flex-col md:flex-row gap-3'>
            <div className='rounded-md cursor-pointer bg-slate-200 p-2 max-w-[300px] flex flex-col items-center'>
                <img src="https://images.unsplash.com/photo-1450500392544-c2cb0fd6e3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGtheWFrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" 
                className='rounded-md mb-4 max-w-[300px] w-[96%]'
                />
                <div className='flex justify-between items-center px-2 w-full'>
                    <p className='text-xs'>Blog</p>
                    <BsBookmarkFill className='hover:text-blue-700'/>
                </div>
            </div>
            <div className='rounded-lg cursor-pointer bg-slate-200 p-2 max-w-[300px] flex flex-col items-center'>
                <img src="https://media.istockphoto.com/id/1367988708/photo/senior-man-kayaking-in-lake-with-his-pet-dog.jpg?b=1&s=170667a&w=0&k=20&c=4iQk5xDS6Gq99maL1i1SPTqJvPCFR9m7Ucv-2eCHSdk=" alt="" 
                className='rounded-md mb-4 max-w-[300px] w-[96%]'
                />
                <div className='flex justify-between items-center px-2 w-full'>
                    <p className='text-xs'>Blog</p>
                    <BsBookmarkFill className='hover:text-blue-700'/>
                </div>
            </div>
            {/* <div>
                <img src="https://images.unsplash.com/photo-1620903669944-de50fbe78210?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </div> */}
        </div>
    </div>
  )
}
