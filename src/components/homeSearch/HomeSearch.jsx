import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CiSearch } from 'react-icons/ci';
import couch from '../../assets/couch.png';
import { getSearchProducts } from '../../redux/searchSlice';
const HomeSearch = () => {

    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearch = () => {
      if (searchQuery.trim() !== '') {
        dispatch(getSearchProducts(searchQuery));
      }
    };

    return (
        <div className="flex-row ">
          <div className='flex justify-center'>
          <div className="flex absolute -top justify-evenly border-2 border-gray-100 bg-white w-6/12">
            <input
              type="text"
              placeholder="Search your product"
              className=" lg w-8/12 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>
              <CiSearch className="my-3" />
            </button>
          </div>
          </div>
          <div className="flex justify-center items-center m-0">
            <img src={couch} alt="couch" className="w-full h-auto mt-5" />
          </div>
        </div>
      );
    };


export default HomeSearch