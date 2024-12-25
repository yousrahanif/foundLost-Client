import React from 'react';
import Slider from './Slider';
import Stat from './Stat';
import Testimonials from './Testimonials';
import LatestItems from './LatestItems';
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Helmet>
        <title>Home - ReturnPoint</title>
      </Helmet>
            <Slider></Slider>
            <LatestItems></LatestItems>
            <Stat></Stat>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;