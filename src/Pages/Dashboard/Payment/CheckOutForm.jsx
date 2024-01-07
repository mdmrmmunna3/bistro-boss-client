import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentCardError, setPaymentCardError] = useState('');

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
            console.log('payment method', paymentMethod);
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
                            background: `linear-gradient(90deg, #835D23 0%, #B58130 100%)`,

                        }
                    }
                    className="my-4 text-white px-6 py-1 rounded-sm "
                    type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>

            {
                paymentCardError && <p className="text-red-600">{paymentCardError}</p>
            }
        </>
    );
};

export default CheckOutForm;