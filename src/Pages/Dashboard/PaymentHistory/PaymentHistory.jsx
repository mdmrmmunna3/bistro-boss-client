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
            return res.data;
        }
    })

    return (
        <>
            <div className="lg:w-3/4 w-full">
                <Helmet>
                    <title>Bistro Boss | payment History</title>
                </Helmet>
                {/* common heading  */}
                <HeadingTitel subHeading="At a Galance!" heading="Payment History"></HeadingTitel>
                <div className="uppercase mb-2 md:mb-4 md:px-0 px-2 md:text-start text-center">
                    <h3 className="text-xl font-semibold text-white">Total Payments:  {paymentData?.length} </h3>
                </div>

                {/* payment body  */}
                <div className="overflow-x-auto text-white">
                    <table className="table text-center table-xs">
                        {/* head */}
                        <thead
                            style={{
                                background: `radial-gradient(circle at 10% 20%, rgb(26, 178, 203) 0%, rgb(0, 102, 161) 90.1%)`
                            }}
                            className="uppercase text-xs text-white">
                            <tr>
                                <th className="py-3">
                                    #
                                </th>
                                <th className="py-3">Email</th>
                                <th className="hidden md:block py-3">Transaction Id</th>
                                <th className="py-3">Price</th>
                                <th className="py-3">Quantity</th>
                                <th className="py-3">Payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                paymentData.map((payment, index) => <tr key={payment?._id}>
                                    <td className="lg:py-5 md:py-4 py-1">
                                        {index + 1}
                                    </td>
                                    <td className="lg:py-5 md:py-4 py-1 break-words">{payment?.email}</td>

                                    <td className="break-words hidden md:block lg:py-5 md:py-4 py-1">{payment?.transactionId}</td>
                                    <td className="lg:py-5 md:py-4 py-1">${payment?.price}</td>
                                    <td className="lg:py-5 md:py-4 py-1">
                                        {payment?.quantity}
                                    </td>
                                    <td className="lg:py-5 md:py-4 py-1">
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