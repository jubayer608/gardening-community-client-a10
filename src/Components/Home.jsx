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
            <div className='my-10'>
                <FeaturedGardeners></FeaturedGardeners>
            </div>
            <div className='my-10'>
               <TopTrendingTips></TopTrendingTips>
            </div>
            <div className='my-10'>
                 <GardeningTips></GardeningTips>
            </div>
            <div className='my-10'>
                   <UpcomingEvents></UpcomingEvents>
            </div>
            
            
        </div>
    );
};

export default Home;