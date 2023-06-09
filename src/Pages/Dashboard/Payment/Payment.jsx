import { Elements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import CheckOut from './CheckOut';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const course = useLoaderData();
    console.log(course.price);
    let coursePrice = course.price;

    if (typeof coursePrice !== 'number') {
        console.log(coursePrice);
        const convertPrice = parseFloat(coursePrice);
        console.log(parseFloat(convertPrice.toFixed(2)));
        const finalPrice = parseFloat(convertPrice.toFixed(2))
        coursePrice = finalPrice;
        console.log('finalPrice', finalPrice);
    }
    console.log(coursePrice);




    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PRODUCTION_KEY);
    return (
        <>
            <div className='shadow-2xl p-10 w-[80%] mx-auto mt-20'>
            <table className="table shadow-2xl">
                    {/* head */}
                    <thead className='bg-red'>
                        <tr className='bg-slate-800 rounded-t-lg text-white'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Course Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

            <tr className='hover'>
                <th>{1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={course.classPhoto} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h4 className="font-bold">{course.className}</h4>
                            </td>
                            <td>
                                <h4 className="font-bold">Name: {course.instructorName}</h4>

                            </td>
                            <td className="text-center font-bold">${course.price}</td>

                        </tr>
                        </tbody>
                </table>
                <div className={'shadow-sky-300 shadow-2xl p-10 mt-5'}>
                <Elements stripe={stripePromise}>
                    <CheckOut price={coursePrice} />
                </Elements>
                </div>
            </div>
        </>
    );
};

export default Payment;