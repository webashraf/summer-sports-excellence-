import Heading from "../../../Shared/Heading/Heading";
import trophy1 from "../../../assets/awards-img/Trophy_01.png";
import trophy2 from "../../../assets/awards-img/Trophy_02.png";
import trophy3 from "../../../assets/awards-img/Trophy_03.png";
import trophy4 from "../../../assets/awards-img/Trophy_04.png";
import trophy5 from "../../../assets/awards-img/Trophy_05.png";
import trophy6 from "../../../assets/awards-img/Trophy_06.png";
import trophy7 from "../../../assets/awards-img/Trophy_07.png";
import trophy8 from "../../../assets/awards-img/Trophy_08.png";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper";



const OurAwards = () => {




    const trophys = [
        trophy1,
        trophy2,
        trophy3,
        trophy4,
        trophy5,
        trophy6,
        trophy7,
        trophy8,
    ]
    return (
        < >
            <Heading pText={'See our best awards'} hText={'Our Awards'}></Heading>

            <div className={`bg-[url('https://images.pexels.com/photos/934083/pexels-photo-934083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-top bg-fixed `}>
                <div className="bg-[#00000086] py-20">
                    <div>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={10}

                            navigation={true}
                            // modules={[Pagination, Navigation]}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                            



                        >
                            <div className="grid grid-cols-2">
                                {
                                    trophys.map((trophy, i) => <SwiperSlide className="border-4 border-[#ffffff0c] bg-[#0e3c3fb2] h-[200px]" key={i}>
                                        <div className="">
                                            <img style={{ height: "auto" }} className="w-full  h-auto" src={trophy} alt="" />
                                        </div>
                                    </SwiperSlide>)
                                }
                            </div>
                        </Swiper>
                    </div>
                </div>


            </div>



        </>
    );
};

export default OurAwards;