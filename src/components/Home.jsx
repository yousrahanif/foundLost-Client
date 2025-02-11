import React from 'react';
import Slider from './Slider';
import Stat from './Stat';
import Testimonials from './Testimonials';
import LatestItems from './LatestItems';
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div className=''>
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