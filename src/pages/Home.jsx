import React from 'react';
import HomeTitle from '../components/homeTitle/HomeTitle';
import HomeSearch from '../components/homeSearch/HomeSearch';
import AboutUs from '../components/aboutUs/AboutUs';
import Products from '../components/products/Products';
import { useState } from 'react';
import Testimonal from '../components/testimonals/Testimonal';
import Contact from '../components/contact/Contact';

const Home = () => {
    const [category, setCategory] = useState('')
    return (
        <div>
            <HomeTitle />
            <HomeSearch />
            <AboutUs />
            <Products />
            <Testimonal />
            <Contact/>
        </div>


    );
}

export default Home;