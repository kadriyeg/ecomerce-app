import React from 'react';
import HomeTitle from '../components/homeTitle/HomeTitle';
import HomeSearch from '../components/homeSearch/HomeSearch';
import AboutUs from '../components/aboutUs/AboutUs';
import Products from '../components/products/Products';
import Testimonal from '../components/testimonals/Testimonal';
import Contact from '../components/contact/Contact';
import Categories from '../components/products/Categories';
import { useState } from 'react';
import Footer from '../components/footer/Footer';


const Home = () => {
    const [category, setCategory] = useState('');

    return (
        <div>
            <HomeTitle />
            <HomeSearch />
            <AboutUs />
            <Categories setCategory={setCategory} />
            <Products category={category} />
            <Testimonal />
            <Contact/>
            <Footer/>
        </div>


    );
}

export default Home;