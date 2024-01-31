import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import { Pagination, Autoplay } from 'swiper/modules';
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const Testimonials = () => {
    // const [reviews, setReviews] = useState([]);
    const axiosPublic = useAxiosPublic();
    // using axiossecure 
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviewData'],
        queryFn: async () => {
            const res = await axiosPublic('/reviews')
            return res.data
        }
    })

    // using useEffect 
    // useEffect(() => {
    //     fetch('https://bistro-boss.up.railway.app/reviews')
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    //         .catch(err => console.error(err))
    // }, []);

    return (
        <section className="my-20 md:mx-16 lg:mx-28">
            <HeadingTitel
                subHeading="What Our Clients Say"
                heading="Testimonials"
            ></HeadingTitel>
            <Swiper
                cssMode={true}
                navigation={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Autoplay, Pagination]}
                className="mySwiper"
            >

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div
                            style={{
                                boxShadow: `rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px`
                            }}
                            className="flex flex-col items-center py-3 md:my-14 my-4 mx-20">
                            <Rating
                                style={{ maxWidth: 150 }}
                                value={review?.rating}
                                readOnly
                            />
                            <div className="avatar mt-3">
                                <div className="w-24 rounded-full">
                                    <img src={review?.image} />
                                </div>
                            </div>
                            <p className="md:py-6 py-3 px-2 text-white">{review?.details}</p>
                            <p className="md:text-2xl text-lg text-orange-500 uppercase">{review?.name}</p>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Testimonials;