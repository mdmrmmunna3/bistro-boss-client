import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";


const CheckOutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [paymentCardError, setPaymentCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('error', error);
            setPaymentCardError(error.message);
        }
        else {
            setPaymentCardError('');
            // console.log('payment method', paymentMethod);
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent);
        setProcessing(false);
        if (paymentIntent.status === 'succeeded') {
            console.log(paymentIntent.id);
            setTransactionId(paymentIntent.id);
            //TODO next steps
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    style={
                        {
                            // background: `linear-gradient(90deg, #835D23 0%, #B58130 100%)`,

                        }
                    }
                    // className="my-4 text-white px-6 py-1 rounded-sm btn "
                    className="my-4 text-white rounded-sm btn btn-sm btn-primary"
                    type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>

            {
                paymentCardError && <p className="text-red-600">{paymentCardError}</p>
            }
            {
                transactionId && <p className="text-green-600">Transaction Compelet with Transaction Id {transactionId}</p>
            }
        </>
    );
};

export default CheckOutForm;