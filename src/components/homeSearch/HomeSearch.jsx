import React from 'react'
import { CiSearch } from 'react-icons/ci'
import couch from '../../assets/couch.png'

const HomeSearch = () => {
    return (
        <div className='flex-row'>
            <div className=' flex justify-around border-2  border-gray-100 w-6/12'>
                <input type='text' placeholder='Search your product' className=' flex justify-center lg w-8/12 outline-none' />
                <CiSearch className='my-3' />
            </div>
            <div className='flex justify-center items-center  m-0'>
                <img src={couch} alt="couch" className='w-full h-auto' />
            </div>
            </div>
       


    )
}

export default HomeSearch