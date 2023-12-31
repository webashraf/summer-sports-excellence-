import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import swal from "sweetalert";

const CheckOut = ({ price, course }) => {
    const [clientSecret, setClientSecrete] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const [processing, setProcessing] = useState(false);
    const [transectionId, setTransectionId] = useState(null);


    // console.log(course);


    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/createPaymentIntent', { price })
                .then(res => {
                    // console.log(res.data);
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
        // console.log(paymentIntent);
        if (paymentIntent?.status === "succeeded") {
            const transectionId = paymentIntent?.id;
            setTransectionId(transectionId);

            const payment = {
                classId: course.classId,
                className: course.className,
                classPhoto: course.classPhoto,
                instructorEmail: course.instructorEmail,
                instructorName: course.instructorName,
                price,
                paymentTime: new Date(),
                studentEmail: course.studentEmail,
                transectionId,
            }
            console.log(payment);
            axiosSecure.post(`/payment`, payment)
                .then(res => {
                    console.log(res.data)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Status successfully updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    // swal( "success" ,  "Something went wrong!" ,  "error" )
                })
        }

    };

    return (
        <>
            {paymentError && <p className="text-red-600">{paymentError}!!</p>}
            {transectionId && <p className="text-emerald-700 font-bold">Payment successful. Your transectionId: {transectionId}</p>}
            <form onSubmit={handleSubmit} >
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
                <button className="btn bg-teal-500 border-teal-500" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
        </>
    );
};

export default CheckOut;