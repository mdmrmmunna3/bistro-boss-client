import { Helmet } from "react-helmet-async";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaRegTrashAlt } from "react-icons/fa";


const MyBooking = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: booking = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/bookings/${user?.email}`);
            // console.log(res.data)
            return res.data;
        }
    })

    const handleDelete = data => {
        console.log(data)
    }
    return (
        <>
            <div className="w-full md:w-3/4">
                <Helmet>
                    <title>Bistro Boss | My Booking</title>
                </Helmet>

                {/* common heading  */}
                <HeadingTitel
                    subHeading="Excellent"
                    heading="My Bookings"
                ></HeadingTitel>

                <div className="uppercase flex justify-between items-center md:mb-6 mb-3 md:px-0 px-2">
                    <h3 className="md:text-xl text-xs font-semibold ">Total Bookins:{booking.length}</h3>

                </div>

                <div className="overflow-x-auto ">
                    <table className="table text-center">
                        {/* head */}
                        <thead className="uppercase bg-[#D1A054] text-white">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Name</th>
                                <th>Guest Number</th>
                                <th>Booking Date</th>
                                <th>Booking Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                booking.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {item?.name}
                                    </td>
                                    <td>
                                        {item?.guestCount}
                                    </td>
                                    <td>
                                        {item?.bookingDate}
                                    </td>

                                    <td>{item?.bookingTime}</td>

                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white btn-sm"><FaRegTrashAlt ></FaRegTrashAlt></button>
                                    </td>
                                </tr>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>
        </>
    );
};

export default MyBooking;