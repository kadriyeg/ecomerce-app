import React from 'react';
import HomeTitle from '../components/homeTitle/HomeTitle';
import HomeSearch from '../components/homeSearch/HomeSearch';
import AboutUs from '../components/aboutUs/AboutUs';
import Products from '../components/products/Products';
const Home = () => {
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