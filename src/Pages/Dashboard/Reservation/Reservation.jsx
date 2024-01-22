import { Helmet } from "react-helmet-async";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";
import OurLocation from "./OurLocation";
import { useForm } from "react-hook-form";
import { MdOutlineEventNote } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Reservation = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)
        const booking = {
            bookingDate: data.bookingDate,
            bookingTime: data.bookingTime,
            email: data.email,
            guestCount: parseInt(data.guestCount),
            name: data.name,
            phone: data.phone
        }
        const bookingData = await axiosSecure.post('/bookings', booking)

        console.log('after posting booking a table', bookingData);
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

    }
    console.log(errors)

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
                                <span className="label-text font-semibold">Date*</span>
                            </div>
                            <input type="date"
                                {...register("bookingDate", { required: true })}
                                className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Time*</span>
                            </div>
                            <input type="time"
                                {...register("bookingTime", { required: true })}
                                className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold">Guest*</span>
                            </div>
                            <input type="number" placeholder="Select persons"
                                {...register("guestCount", { required: true, maxLength: 10 })}
                                className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Name*</span>
                            </div>
                            <input type="text" placeholder="Your Name"
                                {...register("name", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full" />

                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Phone*</span>
                            </div>
                            <input type="number" placeholder="Your Phone"
                                {...register("phone", { required: true, maxLength: 80 })}
                                className="input input-bordered w-full" />

                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Email*</span>
                            </div>
                            <input type="email" placeholder="Your Email"
                                {...register("email", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full" />

                        </label>

                    </div>
                    <div className="flex justify-center">
                        <div className="flex items-center relative">
                            <input
                                style={
                                    {
                                        background: `linear-gradient(90deg, #835D23 0%, #B58130 100%)`,
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