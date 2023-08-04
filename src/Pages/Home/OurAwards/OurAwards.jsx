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
                            // pagination={{
                            //     clickable: true,
                            // }}
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
                            <div className="">
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
                <div className="join join-vertical w-full bg-white">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-secondary">Put me on the Council and not make me a Master!??</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-accent">That's never been done in the history of the Jedi. It's insulting!</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-error">It's never happened before.</div>
                </div>
                <div className="flex justify-center gap-1 my-1 w-full">
                    <kbd className="kbd">q</kbd>
                    <kbd className="kbd">w</kbd>
                    <kbd className="kbd">e</kbd>
                    <kbd className="kbd">r</kbd>
                    <kbd className="kbd">t</kbd>
                    <kbd className="kbd">y</kbd>
                    <kbd className="kbd">u</kbd>
                    <kbd className="kbd">i</kbd>
                    <kbd className="kbd">o</kbd>
                    <kbd className="kbd">p</kbd>
                </div>
                <div className="flex justify-center gap-1 my-1 w-full">
                    <kbd className="kbd">a</kbd>
                    <kbd className="kbd">s</kbd>
                    <kbd className="kbd">d</kbd>
                    <kbd className="kbd">f</kbd>
                    <kbd className="kbd">g</kbd>
                    <kbd className="kbd">h</kbd>
                    <kbd className="kbd">j</kbd>
                    <kbd className="kbd">k</kbd>
                    <kbd className="kbd">l</kbd>
                </div>
                <div className="flex justify-center gap-1 my-1 w-full">
                    <kbd className="kbd">z</kbd>
                    <kbd className="kbd">x</kbd>
                    <kbd className="kbd">c</kbd>
                    <kbd className="kbd">v</kbd>
                    <kbd className="kbd">b</kbd>
                    <kbd className="kbd">n</kbd>
                    <kbd className="kbd">m</kbd>
                    <kbd className="kbd">/</kbd>
                </div>
            </div>



        </>
    );
};

export default OurAwards;