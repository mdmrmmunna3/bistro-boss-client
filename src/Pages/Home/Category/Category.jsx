import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import chef from '../../../assets/home/chef-service.jpg'


import HeadingTitel from '../../../components/HeadingTitel/HeadingTitel';
import './Category.css'

const Category = () => {
    return (
        <section className='md:mx-16 lg:mx-28'>
            <HeadingTitel
                subHeading={'Form 11.00am to 10.00pm'}
                heading={'order online'}
            ></HeadingTitel>
            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper mb-16"
                >
                    <SwiperSlide>
                        <img src={slider1} alt="" />
                        <h3 className='text-center uppercase lg:text-2xl md:text-xl text-xs text-white -mt-16'>Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider2} alt="" />
                        <h3 className='text-center uppercase lg:text-2xl md:text-xl text-xs text-white -mt-16'>Pizza</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider3} alt="" />
                        <h3 className='text-center uppercase lg:text-2xl md:text-xl text-xs text-white -mt-16'>Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider4} alt="" />
                        <h3 className='text-center uppercase lg:text-2xl md:text-xl text-xs text-white -mt-16'>Desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider5} alt="" />
                        <h3 className='text-center uppercase lg:text-2xl md:text-xl text-xs text-white -mt-16'>Salads</h3>
                    </SwiperSlide>

                </Swiper>
                {/* swiper part end  */}

                <div className="hero h-96 bg-fixed" style={{ backgroundImage: `url(${chef})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className=" bg-white text-black py-4 md:py-12 px-8 md:mx-10">
                            <h1 className="mb-5 text-4xl font-light uppercase">Bistro Boos</h1>
                            <p className="mb-5 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem nesciunt brarchitecto consequuntur error corrupti debitis repudiandae placeat vitae explicabo modi soluta quisquam quam, beatae iure incidunt pariatur aut laboriosam voluptate. Fuga qui quisquam odio!</p>

                        </div>
                    </div>
                </div>
            </>
        </section>

    );
};

export default Category;