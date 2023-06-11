import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';


const Slider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide className='relative'>
                    <img src="https://images.pexels.com/photos/6655696/pexels-photo-6655696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className='absolute font-bold px-20 bg-[#10101090] h-full w-full flex items-center'>
                       <div className='text-white md:w-1/2 md:text-left space-y-3 text-center'>
                       <h1 className='text-5xl md:text-7xl'>Elevate Your Game to New Heights</h1>
                        <p className='text-sm font-light md:text-md'>Join our high school sports learning program and take your skills to the next level. Our experienced coaches and comprehensive training sessions will help you improve your technique, boost your performance, and achieve your full athletic potential.</p>
                       </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='relative'>
                    <img src="https://images.pexels.com/photos/6456175/pexels-photo-6456175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className='absolute font-bold px-20 bg-[#10101090] h-full w-full flex items-center'>
                       <div className='text-white md:w-1/2 md:text-left space-y-3 text-center'>
                       <h1 className='text-5xl md:text-7xl'>Train Like a Champion</h1>
                        <p className='text-sm font-light md:text-md'>Experience rigorous training regimens designed to push your limits and develop your athletic abilities. Our high school sports learning program focuses on building strength, agility, and mental resilience, preparing you to compete at the highest level.</p>
                       </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide className='relative'>
                    <img src="https://images.pexels.com/photos/296302/pexels-photo-296302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className='absolute font-bold px-20 bg-[#10101090] h-full w-full flex items-center'>
                       <div className='text-white md:w-1/2 md:text-left space-y-3 text-center'>
                       <h1 className='text-5xl md:text-7xl'>Become a Well-Rounded Athlete</h1>
                        <p className='text-sm font-light md:text-md'>Join a community of like-minded athletes and forge lifelong friendships. Our high school sports learning program fosters camaraderie, teamwork, and sportsmanship, creating a supportive network of fellow athletes who share your passion for sports.</p>
                       </div>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}


export default Slider;