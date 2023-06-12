import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom/dist';
import { useForm } from 'react-hook-form';
import ImageHeading from '../../../../Shared/ImgHeading/ImageHeading';

const Feedback = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { id } = useParams();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(id);
        console.log(data.textarea);
        const text = data.textarea;
        axios.put(`https://a12-server-eight.vercel.app/classFeedbackUpdate/${id}`, { feedback: text })
            .then(res => {
                console.log(res.data)
                navigate("/dashboard/manageclasses")
            })
    };

    console.log(watch("example"));


    return (
        <div className='space-y-10 py-20'>
            <h1 className='text-5xl font-serif'>Feed for this class....</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='form-control'>
                    <textarea className="textarea textarea-info h-[300px]" placeholder="write feedback...." {...register("textarea")}></textarea>
                </div>


                <button type='submit' className='btn btn-primary mt-3'>Submit feedback</button>
            </form>
        </div>
    );
};

export default Feedback;