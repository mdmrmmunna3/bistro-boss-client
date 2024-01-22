import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

const OurLocation = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 text-center mb-5">
            <div className="">
                <div className="bg-[#D1A054] py-3">
                    <h2 className="flex justify-center text-2xl text-white">
                        <BiSolidPhoneCall></BiSolidPhoneCall>
                    </h2>
                </div>
                <div className="flex items-center justify-center bg-[#F3F3F3] h-44">
                    <div>
                        <h3 className="uppercase font-semibold">Phone</h3>
                        <span>+888********</span>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="bg-[#D1A054] py-3">
                    <h2 className="flex justify-center text-2xl text-white">
                        <FaLocationDot></FaLocationDot>
                    </h2>
                </div>
                <div className="flex items-center justify-center bg-[#F3F3F3] h-44 ">
                    <div>
                        <h3 className="uppercase font-semibold">Address</h3>
                        <span>West Agargaon Shere-e Bangla Nagar, Dhaka-1207</span>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="bg-[#D1A054] py-3">
                    <h2 className="flex justify-center text-2xl text-white">
                        <IoTime></IoTime>
                    </h2>
                </div>
                <div className="flex items-center justify-center bg-[#F3F3F3] h-44 ">
                    <div >
                        <h3 className="uppercase font-semibold">Working Hours</h3>
                        <span className="block">Mon - Fri: 08:00 AM - 10:00 PM</span>
                        <span>Sat - Sun: 10:00 AM - 11:00 PM</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurLocation;