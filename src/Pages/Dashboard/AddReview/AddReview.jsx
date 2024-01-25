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
            rating: data.rating

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
                <div className="text-center md:px-28 md:py-10 p-4 mx-3 md:mx-0 bg-[#F3F3F3]">
                    <h2 className="md:text-2xl text-xl uppercase ">
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
                            <span className="label-text font-semibold">Name*</span>
                        </div>
                        <input type="text" placeholder="Your Name" defaultValue={user?.displayName} className="input w-full "
                            {...register("name", { required: true, maxLength: 120 })}
                        />

                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold">Email*</span>
                        </div>
                        <input type="text" placeholder="Your Name" defaultValue={user?.email} className="input w-full "
                            {...register("email", { required: true, maxLength: 120 })}
                        />

                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold">Which recipe you liked most?</span>
                        </div>
                        <input type="text" placeholder="Recipe you liked most" className="input w-full "
                            {...register("likedRecipe", { required: true, maxLength: 80 })}
                        />

                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold">Do you have any suggestion for us?</span>
                        </div>
                        <input type="text" placeholder="Suggestion" className="input w-full "
                            {...register("suggestion", { required: true, maxLength: 80 })}
                        />
                    </label>

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text font-semibold">Kindly express your care in a short way</span>
                        </div>
                        <textarea className="textarea h-28" placeholder="Review in detail"
                            {...register("details", { required: true, maxLength: 120 })}
                        ></textarea>
                    </label>

                    {/* submit btn  */}
                    <div className="flex justify-center cursor-pointer mt-3">
                        <div className="flex items-center relative">
                            <input
                                style={
                                    {
                                        background: `linear-gradient(90deg, #835D23 0%, #B58130 100%)`,
                                        cursor: 'pointer'
                                    }
                                }
                                className=" my-4 text-white px-12 py-2"
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