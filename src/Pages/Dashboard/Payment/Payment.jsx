import { Helmet } from "react-helmet-async";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";


const Payment = () => {
    return (
        <div className="md:w-3/4 w-full">
            <Helmet>
                <title>Bistro Boss | Payment</title>
            </Helmet>
            {/* common heading  */}
            <HeadingTitel subHeading="Please Process" heading="Payment"></HeadingTitel>
        </div>
    );
};

export default Payment;