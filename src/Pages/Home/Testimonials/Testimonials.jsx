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
                autoplay={{ delay: 2000, disableOnInteraction: false }}
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
                        <div className="flex flex-col items-center md:my-14 my-4 mx-20">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <i className="fa-solid fa-quote-left text-8xl mt-3"></i>
                            <p className="md:py-6 py-3">{review.details}</p>
                            <p className="text-2xl text-orange-500 uppercase">{review?.name}</p>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Testimonials;