import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './Payment.css'
import { useEffect, useState } from "react";
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import useAuth from "../../../hooks/useAuth";

const CheckOut = ({ price }) => {
    const [clientSecret, setClientSecrete] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const [processing, setProcessing] = useState(false);
    const [transectionId, setTransectionId] = useState(null);


    console.log(price);


    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/createPaymentIntent', { price })
                .then(res => {
                    console.log(res.data);
                    setClientSecrete(res.data.clientSecret)
                })
        }

    }, [price, axiosSecure])



    const handleSubmit = async (event) => {
        event.preventDefault();
        setTransectionId(null)
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        console.log(card);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('[error]', error);
            setPaymentError(error.message);
        }
        else {
            setPaymentError(null);
            console.log('[paymentMethod]', paymentMethod);
        }
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous user',
                        email: user?.email || 'anonymous user',
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }
        setProcessing(false);
        console.log(paymentIntent);
        if (paymentIntent?.status === "succeeded") {
            const transectionId = paymentIntent?.id;
            setTransectionId(transectionId);
        }

    };

    return (
        <>
            {paymentError && <p className="text-red-600">{paymentError}!!</p>}
            {transectionId && <p className="text-emerald-700 font-bold">Payment successful. Your transectionId: {transectionId}</p>}
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
                <button className="btn btn-primary" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
        </>
    );
};

export default CheckOut;