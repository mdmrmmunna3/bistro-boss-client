import { Helmet } from "react-helmet-async";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";
import { MdRocketLaunch } from "react-icons/md";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [rating, setRating] = useState(0);
    const [axiosSecure] = useAxiosSecure();


    const handleRatingChange = selectedValue => {
        setRating(selectedValue);
    }
    const onSubmit = async (data) => {
        // if (rating === 0) {
        //     // Handle the case where the rating is not provided
        //     console.error('Rating is required.');
        //     return;
        // }

        data.rating = rating;
        const review = {
            name: data.name,
            email: data.email,
            likedRecipe: data.likedRecipe,
            suggestion: data.suggestion,
            details: data.details,
            rating: data.rating,
            image: user?.photoURL
        }
        const reviewData = await axiosSecure.post('/reviews', review);
        console.log(reviewData);

        if (reviewData.data.insertedId) {
            reset();
            setRating(0);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Review Send successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
        console.log(errors)
    }


    return (
        <div className="w-full md:w-3/4 mb-5">
            <Helmet>
                <title>Bistro Boss | Add Review</title>
            </Helmet>
            {/* common part  */}
            <HeadingTitel subHeading="Sharing is Caring" heading="Give a Review"></HeadingTitel>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div
                    style={{
                        boxShadow: `rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px`
                    }}
                    className="text-center md:px-28 md:py-10 p-4 mx-3 md:mx-0 bg-[#0b1315]">
                    <h2 className="md:text-2xl text-xl uppercase text-yellow-600">
                        Rate Us!
                    </h2>
                    {/* rating part start  */}
                    <div className="flex justify-center">
                        <label htmlFor="rating"></label>
                        <Rating
                            id="rating"
                            style={{ maxWidth: 200 }}
                            value={rating} onChange={handleRatingChange} required></Rating>
                    </div>
                    {/* rating part end */}

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-gray-300">Name*</span>
                        </div>
                        <input type="text" placeholder="Your Name" defaultValue={user?.displayName} className="input w-full appearance-none leading-tight focus:outline-none focus:shadow-outline bg-black text-white"
                            {...register("name", { required: true, maxLength: 120 })}
                        />

                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-gray-300">Email*</span>
                        </div>
                        <input type="text" placeholder="Your Name" defaultValue={user?.email} className="input w-full appearance-none leading-tight focus:outline-none focus:shadow-outline bg-black text-white"
                            {...register("email", { required: true, maxLength: 120 })}
                        />

                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-gray-300">Which recipe you liked most?</span>
                        </div>
                        <input type="text" placeholder="Recipe you liked most" className="input w-full appearance-none leading-tight focus:outline-none focus:shadow-outline bg-black text-white"
                            {...register("likedRecipe", { required: true, maxLength: 80 })}
                        />

                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-gray-300">Do you have any suggestion for us?</span>
                        </div>
                        <input type="text" placeholder="Suggestion" className="input w-full appearance-none leading-tight focus:outline-none focus:shadow-outline bg-black text-white"
                            {...register("suggestion", { required: true, maxLength: 80 })}
                        />
                    </label>

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text font-semibold text-gray-300">Kindly express your care in a short way</span>
                        </div>
                        <textarea className="textarea h-28 appearance-none leading-tight focus:outline-none focus:shadow-outline bg-black text-white" placeholder="Review in detail"
                            {...register("details", { required: true, maxLength: 120 })}
                        ></textarea>
                    </label>

                    {/* submit btn  */}
                    <div className="flex justify-center cursor-pointer mt-3">
                        <div className="flex items-center relative">
                            <input
                                style={{
                                    background: `radial-gradient(circle at 10% 20%, rgb(26, 178, 203) 0%, rgb(0, 102, 161) 90.1%)`,
                                    cursor: 'pointer'
                                }}
                                className=" my-4 text-white px-12 py-2 "
                                type="submit" value="Send Review"

                            />
                            <span className="absolute left-[150px] text-white">
                                <MdRocketLaunch />
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddReview;