import { Helmet } from "react-helmet-async";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";


const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
    return (
        <div className="md:w-3/4 w-full">
            <Helmet>
                <title>Bistro Boss | Payment</title>
            </Helmet>
            {/* common heading  */}
            <HeadingTitel subHeading="Please Process" heading="Payment"></HeadingTitel>

            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;