import React from 'react';
import HomeTitle from '../components/homeTitle/HomeTitle';
import HomeSearch from '../components/homeSearch/HomeSearch';
import couch from '../assets/couch.png';
import AboutUs from '../components/aboutUs/AboutUs';
const Home = () => {
    return (
        <div>
            <HomeTitle />
            <HomeSearch />
            <div className='flex justify-center items-center  m-0'>
                <img src={couch} alt="couch" className='w-full h-auto' />
            </div>
            <AboutUs />
        </div>


    );
}

export default Home;