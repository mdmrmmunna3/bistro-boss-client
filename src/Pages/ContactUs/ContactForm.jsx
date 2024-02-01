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

                <div className="mb-5" >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div
                            style={{
                                // boxShadow: `rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px`
                                boxShadow: `rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px`
                            }}
                            className="bg-[#0b1315] md:p-10 rounded-md">
                            <div className=" mx-3 md:mx-0">

                                <div className="md:flex items-center block">
                                    <label className="form-control w-full mr-3">
                                        <div className="label">
                                            <span className="label-text font-semibold text-white">Name*</span>
                                        </div>
                                        <input type="text" defaultValue={user?.displayName} placeholder="Enter Your Name"
                                            {...register("name", { required: true, maxLength: 120 })}
                                            className="input input-bordered w-full shadow-md appearance-none leading-tight focus:outline-none focus:shadow-outline bg-black text-white" />

                                    </label>

                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-semibold text-gray-300">Email*</span>
                                        </div>
                                        <input defaultValue={user?.email} type="email" placeholder="Enter Your Email"
                                            {...register("email", { required: true, maxLength: 120 })}
                                            className="input input-bordered w-full shadow-md appearance-none leading-tight focus:outline-none focus:shadow-outline bg-black text-white" />

                                    </label>
                                </div>

                                <div className="md:flex items-center block">
                                    <label className="form-control w-full mr-3">
                                        <div className="label">
                                            <span className="label-text font-semibold text-gray-300">Phone*</span>
                                        </div>
                                        <input type="tel" placeholder="Enter Your Phone"
                                            {...register("phone", { required: true, maxLength: 80 })}
                                            className="input input-bordered w-full shadow-md appearance-none leading-tight focus:outline-none focus:shadow-outline bg-black text-white" />

                                    </label>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-semibold text-gray-300">Address*</span>
                                        </div>
                                        <input type="text" placeholder="Enter Your Address"
                                            {...register("address", { required: true, maxLength: 80 })}
                                            className="input input-bordered w-full shadow-md appearance-none leading-tight focus:outline-none focus:shadow-outline bg-black text-white" />

                                    </label>
                                </div>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-semibold text-gray-300">Message*</span>
                                    </div>
                                    <textarea {...register("message", { required: true, maxLength: 80 })} rows={4} cols={40} className="textarea textarea-bordered shadow-md appearance-none leading-tight focus:outline-none focus:shadow-outline bg-black text-white" placeholder="Write your message here"></textarea>
                                </label>

                            </div>


                            <div className="flex justify-center cursor-pointer">
                                <div className="flex items-center relative">
                                    <input
                                        style={
                                            {
                                                background: `radial-gradient(circle at 10% 20%, rgb(26, 178, 203) 0%, rgb(0, 102, 161) 90.1%)`,
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