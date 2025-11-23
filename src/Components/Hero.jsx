import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const slides = [
  {
    image: 'https://i.ibb.co/7xc0ZtLB/c-z-U7-Guo-BVDJl-A-unsplash.jpg',
    buttonText: 'Join the Community',
    link: '/auth/login',
  },
  {
    image: 'https://i.ibb.co/0V66qkp5/chuttersnap-Ifmq-Ou-Oka-OA-unsplash.jpg',
    buttonText: 'Explore Tips',
    link: '/browse-tips',
  },
  {
    image: 'https://i.ibb.co/ch30Gtgx/etienne-girardet-fg7-Yt3-Wym-FM-unsplash.jpg',
    buttonText: 'Start Now',
    link: '/auth/register',
  },
];

const Hero = () => {
  return (
    <div className="w-full h-[80vh]">
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >  
              <div className="absolute inset-0 bg-black/40 dark:bg-black/60 flex items-center justify-center px-4">
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-6 rounded-xl text-center max-w-xl mx-auto shadow-2xl border border-white/20">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-primary-700 dark:text-primary-400">
                    <Typewriter
                      words={[
                        'Grow Together',
                        'Urban Gardening Made Simple',
                        'Your Green Journey Starts Here',
                      ]}
                      loop
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </h2>
                  <a
                    href={slide.link}
                    className="inline-block mt-4 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
