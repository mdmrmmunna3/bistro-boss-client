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
                    <h3 className="md:text-xl text-xs font-semibold text-white">Total Bookins: {booking.length}</h3>

                </div>

                <div className="overflow-x-auto text-white">
                    <table className="table text-center table-xs">
                        {/* head */}
                        <thead
                            style={{
                                background: `radial-gradient(circle at 10% 20%, rgb(26, 178, 203) 0%, rgb(0, 102, 161) 90.1%)`
                            }}
                            className="uppercase text-xs text-white">
                            <tr>
                                <th className="md:py-3 py-2">
                                    #
                                </th>
                                <th className="py-2 md:py-3">Name</th>
                                <th className="py-2 md:py-3 break-all ...">Email</th>
                                <th className="py-2 md:py-3">Phone</th>
                                <th className="py-2 md:py-3">Book Date</th>
                                <th className="py-2 md:py-3">Book Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                booking.map((item, index) => <tr key={item._id}>
                                    <td className="lg:py-5 md:py-4 py-1">
                                        {index + 1}
                                    </td>
                                    <td className="lg:py-5 md:py-4 py-1">
                                        {item?.name}
                                    </td>
                                    <td className="lg:py-5 md:py-4 py-1 break-all ...">
                                        {item?.email}
                                    </td>
                                    <td className="lg:py-5 md:py-4 py-1">
                                        {item?.phone}
                                    </td>
                                    <td className="lg:py-5 md:py-4 py-1">{item?.bookingDate}</td>
                                    <td className="lg:py-5 md:py-4 py-1">{item?.bookingTime}</td>
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