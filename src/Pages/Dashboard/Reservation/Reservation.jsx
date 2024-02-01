import { Helmet } from "react-helmet-async";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";
import OurLocation from "./OurLocation";
import { useForm } from "react-hook-form";
import { MdOutlineEventNote } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const Reservation = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const onSubmit = async (data) => {
        // console.log(data)
        const booking = {
            bookingDate: data.bookingDate,
            bookingTime: data.bookingTime,
            email: data.email,
            guestCount: parseInt(data.guestCount),
            name: data.name,
            phone: data.phone
        }
        const bookingData = await axiosSecure.post('/bookings', booking)

        // console.log('after posting booking a table', bookingData);
        if (bookingData.data.insertedId) {
            reset();
            Swal.fire({
                position: "center",
                icon: "success",
                title: "booking successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }

        console.log(errors)
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Reservation</title>
            </Helmet>
            <div className="w-full md:w-3/4">
                {/* common part  */}
                <HeadingTitel subHeading="Reservation" heading="Book a Table"></HeadingTitel>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid md:grid-cols-3 gap-3 mx-3 md:mx-0">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold text-white">Date*</span>
                            </div>
                            <input type="date"
                                {...register("bookingDate", { required: true })}
                                className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold text-white">Time*</span>
                            </div>
                            <input type="time"
                                {...register("bookingTime", { required: true })}
                                className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold text-white">Guest*</span>
                            </div>
                            {/* <input type="number" placeholder="Select persons"
                                {...register("guestCount", { required: true, maxLength: 10 })}
                                className="input input-bordered w-full" /> */}

                            <select defaultValue="Selecte-Person" {...register("guestCount", { required: true })} className="select select-bordered">
                                <option disabled >Selecte-Person</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                                <option value='9'>9</option>
                                <option value='10'>10</option>
                                <option value='11'>11</option>
                                <option value='12'>12</option>
                                <option value='13'>13</option>
                                <option value='14'>14</option>
                                <option value='15'>15</option>

                            </select>
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold text-white">Name*</span>
                            </div>
                            <input type="text" placeholder="Your Name"
                                {...register("name", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full" />

                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold text-white">Phone*</span>
                            </div>
                            <input type="cel" placeholder="Your Phone"
                                {...register("phone", { required: true, maxLength: 80 })}
                                className="input input-bordered w-full" />

                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold text-white">Email*</span>
                            </div>
                            <input defaultValue={user?.email} type="email" placeholder="Your Email"
                                {...register("email", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full" />

                        </label>

                    </div>
                    <div className="flex justify-center">
                        <div className="flex items-center relative">
                            <input
                                style={
                                    {
                                        background: `radial-gradient(circle at 10% 20%, rgb(26, 178, 203) 0%, rgb(0, 102, 161) 90.1%)`,
                                        cursor: 'pointer'
                                    }
                                }
                                className=" my-4 text-white px-12 py-2"
                                type="submit" value="Book A Table"

                            />
                            <span className="absolute left-[150px] text-white"><MdOutlineEventNote /></span>
                        </div>
                    </div>

                </form>
            </div>

            <div className="w-ful md:w-3/4">
                {/* common part  */}
                <HeadingTitel subHeading="Visit US" heading="Our Location"></HeadingTitel>
                <OurLocation></OurLocation>

            </div>

        </>
    );
};

export default Reservation;