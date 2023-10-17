import React from 'react'
import { CiSearch } from 'react-icons/ci'
import couch from '../../assets/couch.png'

const HomeSearch = () => {
    return (
        <div className='flex justify-center'>
            <div className=' flex justify-around border-2  border-gray-100 w-6/12'>
                <input type='text' placeholder='Search your product' className=' flex justify-center lg w-8/12' />
                <CiSearch className='my-3' />
            </div>
        </div>


    )
}

export default HomeSearch