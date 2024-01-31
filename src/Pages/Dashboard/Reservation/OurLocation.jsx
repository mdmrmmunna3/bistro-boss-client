import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

const OurLocation = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 text-center mb-5">
            <div >
                <div
                    style={{
                        background: `radial-gradient(circle at 10% 20%, rgb(26, 178, 203) 0%, rgb(0, 102, 161) 90.1%)`
                    }}
                    className="py-3">
                    <h2 className="flex justify-center text-2xl text-white">
                        <BiSolidPhoneCall></BiSolidPhoneCall>
                    </h2>
                </div>
                <div
                    style={{
                        background: `radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%)`,
                        boxShadow: `rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px`
                    }}
                    className="flex items-center justify-center h-44">
                    <div className="text-white">
                        <h3 className="uppercase font-semibold">Phone</h3>
                        <span>+888********</span>
                    </div>
                </div>
            </div>

            <div >
                <div
                    style={{
                        background: `radial-gradient(circle at 10% 20%, rgb(26, 178, 203) 0%, rgb(0, 102, 161) 90.1%)`
                    }}
                    className=" py-3">
                    <h2 className="flex justify-center text-2xl text-white">
                        <FaLocationDot></FaLocationDot>
                    </h2>
                </div>
                <div
                    style={{
                        background: `radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%)`,
                        boxShadow: `rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px`
                    }}
                    className="flex items-center justify-center h-44 ">
                    <div className="text-white">
                        <h3 className="uppercase font-semibold">Address</h3>
                        <span>West Agargaon Shere-e Bangla Nagar, Dhaka-1207</span>
                    </div>
                </div>
            </div>

            <div className="">
                <div
                    style={{
                        background: `radial-gradient(circle at 10% 20%, rgb(26, 178, 203) 0%, rgb(0, 102, 161) 90.1%)`
                    }}
                    className=" py-3">
                    <h2 className="flex justify-center text-2xl text-white">
                        <IoTime></IoTime>
                    </h2>
                </div>
                <div
                    style={{
                        background: `radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%)`,
                        boxShadow: `rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px`
                    }}
                    className="flex items-center justify-center h-44 ">
                    <div className="text-white">
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