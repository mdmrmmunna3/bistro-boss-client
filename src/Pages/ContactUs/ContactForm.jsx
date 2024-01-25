import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { FaTelegramPlane } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";



const ContactForm = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        const contact = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            message: data.message
        }
        console.log(contact)
        const contactData = await axiosSecure.post('/contactUs', contact)
        if (contactData.data.insertedId) {
            reset();
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Contact Message Send successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
        console.log(errors)
    }
    return (
        <>
            {
                <div className="mb-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="bg-[#F3F3F3] md:p-10">
                            <div className=" mx-3 md:mx-0">

                                <div className="md:flex items-center block">
                                    <label className="form-control w-full mr-3">
                                        <div className="label">
                                            <span className="label-text font-semibold">Name*</span>
                                        </div>
                                        <input type="text" defaultValue={user?.displayName} placeholder="Enter Your Name"
                                            {...register("name", { required: true, maxLength: 120 })}
                                            className="input input-bordered w-full" />

                                    </label>

                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-semibold">Email*</span>
                                        </div>
                                        <input defaultValue={user?.email} type="email" placeholder="Enter Your Email"
                                            {...register("email", { required: true, maxLength: 120 })}
                                            className="input input-bordered w-full" />

                                    </label>
                                </div>

                                <div className="md:flex items-center block">
                                    <label className="form-control w-full mr-3">
                                        <div className="label">
                                            <span className="label-text font-semibold">Phone*</span>
                                        </div>
                                        <input type="tel" placeholder="Enter Your Phone"
                                            {...register("phone", { required: true, maxLength: 80 })}
                                            className="input input-bordered w-full" />

                                    </label>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-semibold">Address*</span>
                                        </div>
                                        <input type="text" placeholder="Enter Your Address"
                                            {...register("address", { required: true, maxLength: 80 })}
                                            className="input input-bordered w-full" />

                                    </label>
                                </div>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-semibold">Message*</span>
                                    </div>
                                    <textarea {...register("message", { required: true, maxLength: 80 })} rows={4} cols={40} className="textarea textarea-bordered" placeholder="Write your message here"></textarea>
                                </label>

                            </div>


                            <div className="flex justify-center cursor-pointer">
                                <div className="flex items-center relative">
                                    <input
                                        style={
                                            {
                                                background: `linear-gradient(90deg, #835D23 0%, #B58130 100%)`,
                                                cursor: 'pointer'
                                            }
                                        }
                                        className=" my-4 text-white px-12 py-2"
                                        type="submit" value="Send Message"

                                    />
                                    <span className="absolute left-[160px] text-white"><FaTelegramPlane /></span>
                                </div>
                            </div>
                        </div>


                    </form>
                </div>
            }
        </>
    );
};

export default ContactForm;