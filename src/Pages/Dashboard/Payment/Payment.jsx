import { Helmet } from "react-helmet-async";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import useCart from "../../../Hooks/useCart";


const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => sum + item?.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div className="md:w-3/4 w-full">
            <Helmet>
                <title>Bistro Boss | Payment</title>
            </Helmet>
            {/* common heading  */}
            <HeadingTitel subHeading="Please Process" heading="Payment"></HeadingTitel>

            <Elements stripe={stripePromise}>
                <CheckOutForm cart={cart} price={price} refetch={refetch}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;