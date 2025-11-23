import React from 'react';
import Hero from './Hero';
import FeaturedGardeners from './FeaturedGardeners';
import GardeningTips from './GardeningTips';
import PopularPlants from './PopularPlants';
import TopTrendingTips from './TopTrendingTips';
import SeasonalPlantingGuide from './SeasonalPlantingGuide';
import CommunityStats from './CommunityStats';
import PlantCategories from './PlantCategories';
import SuccessStories from './SuccessStories';
import QuickTipsCarousel from './QuickTipsCarousel';
import JoinCommunityCTA from './JoinCommunityCTA';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto my-10 bg-theme-primary'>
            <Hero></Hero>
            <div className='my-10'>
                <CommunityStats></CommunityStats>
            </div>
            <div className='my-10'>
                <FeaturedGardeners></FeaturedGardeners>
            </div>
            <div className='my-10'>
               <TopTrendingTips></TopTrendingTips>
            </div>
            <div className='my-10'>
                <PlantCategories></PlantCategories>
            </div>
            <div className='my-10'>
                <PopularPlants></PopularPlants>
            </div>
            <div className='my-10'>
                <SeasonalPlantingGuide></SeasonalPlantingGuide>
            </div>
            <div className='my-10'>
                 <GardeningTips></GardeningTips>
            </div>
            <div className='my-10'>
                <QuickTipsCarousel></QuickTipsCarousel>
            </div>
            <div className='my-10'>
                <SuccessStories></SuccessStories>
            </div>
            <div className='my-10'>
                <JoinCommunityCTA></JoinCommunityCTA>
            </div>
        </div>
    );
};

export default Home;