import React from 'react';
import HomeTitle from '../components/homeTitle/HomeTitle';
import HomeSearch from '../components/homeSearch/HomeSearch';
import AboutUs from '../components/aboutUs/AboutUs';
import Products from '../components/products/Products';
import Categories from '../components/products/Categories';
import { useState } from 'react';

const Home = () => {
    const [category, setCategory] = useState('')
    return (
        <div>
            <HomeTitle />
            <HomeSearch />
            <AboutUs />
            <Products />
            
        </div>


    );
}

export default Home;