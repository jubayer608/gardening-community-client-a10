import React from 'react';
import Hero from './Hero';
import FeaturedGardeners from './FeaturedGardeners';
import GardeningTips from './GardeningTips';
import UpcomingEvents from './UpcomingEvents';
import TopTrendingTips from './TopTrendingTips';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto  my-10'>
            <Hero></Hero>
            <FeaturedGardeners></FeaturedGardeners>
            <TopTrendingTips></TopTrendingTips>
            <GardeningTips></GardeningTips>
            <UpcomingEvents></UpcomingEvents>
        </div>
    );
};

export default Home;