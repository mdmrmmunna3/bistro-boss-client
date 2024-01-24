import { Helmet } from "react-helmet-async";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const AllBookings = () => {
    const { loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: booking = [] } = useQuery({
        queryKey: ['bookings'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/bookings`);
            // console.log(res.data)
            return res.data;
        }
    })


    return (
        <>
            <div className="w-full md:w-3/4">
                <Helmet>
                    <title>Bistro Boss | All Bookings</title>
                </Helmet>

                {/* common heading  */}
                <HeadingTitel
                    subHeading="At a Glance!"
                    heading="Manage All Bookings"
                ></HeadingTitel>

                <div className="uppercase flex justify-between items-center md:mb-6 mb-3 md:px-0 px-2">
                    <h3 className="md:text-xl text-xs font-semibold ">Total Bookins: {booking.length}</h3>

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
                                <th>User Email</th>
                                <th>Phone Number</th>
                                <th>Booking Date</th>
                                <th>Booking Time</th>
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
                                        {item?.email}
                                    </td>
                                    <td>
                                        {item?.phone}
                                    </td>
                                    <td>{item?.bookingDate}</td>
                                    <td>{item?.bookingTime}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AllBookings;