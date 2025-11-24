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
        <div className="w-full overflow-x-hidden bg-theme-primary">
            
            {/* 🟢 Hero Section Full Width */}
            <Hero />

            {/* 🟢 Rest of content inside centered container */}
            <div className="w-11/12 mx-auto my-10">
                <div className='my-10'>
                    <CommunityStats />
                </div>
                <div className='my-10'>
                    <FeaturedGardeners />
                </div>
                <div className='my-10'>
                    <TopTrendingTips />
                </div>
                <div className='my-10'>
                    <PlantCategories />
                </div>
                <div className='my-10'>
                    <PopularPlants />
                </div>
                <div className='my-10'>
                    <SeasonalPlantingGuide />
                </div>
                <div className='my-10'>
                    <GardeningTips />
                </div>
                <div className='my-10'>
                    <QuickTipsCarousel />
                </div>
                <div className='my-10'>
                    <SuccessStories />
                </div>
                <div className='my-10'>
                    <JoinCommunityCTA />
                </div>
            </div>
        </div>
    );
};

export default Home;
