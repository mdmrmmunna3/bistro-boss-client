import { Helmet } from "react-helmet-async";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: paymentData = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/payments/${user?.email}`);
            console.log(res.data);
            console.log(res.data)
            return res.data;
        }
    })

    return (
        <>
            <div className="md:w-3/4 w-full">
                <Helmet>
                    <title>Bistro Boss | payment History</title>
                </Helmet>
                {/* common heading  */}
                <HeadingTitel subHeading="At a Galance!" heading="Payment History"></HeadingTitel>
                <div className="uppercase mb-2 md:mb-4 md:px-0 px-2 md:text-start text-center">
                    <h3 className="text-xl font-semibold">Total Payments:  {paymentData?.length} </h3>
                </div>

                {/* payment body  */}
                <div className="overflow-x-auto ">
                    <table className="table text-center">
                        {/* head */}
                        <thead className="uppercase bg-[#D1A054] text-white">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Email</th>
                                <th>Transaction Id</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                paymentData.map((payment, index) => <tr key={payment?._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>{payment?.email}</td>

                                    <td>{payment?.transactionId}</td>
                                    <td className="">${payment?.price}</td>
                                    <td>
                                        {payment?.quantity}
                                    </td>
                                    <td>
                                        {payment?.date}
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

export default PaymentHistory;