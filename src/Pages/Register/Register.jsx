import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom/dist";

const Register = () => {
    const { createUserWithEmailAndPass, updateUserProfile, user } = useAuth();
    const { register, handleSubmit, formState: { errors }, trigger } = useForm();
    const [confirmPassError, setConfirmPassError] = useState('');
    const navigate = useNavigate();
    console.log(confirmPassError);
    const onSubmit = data => {
        console.log(data)
        // console.log(data.confirmPassword, data.password)



        if (data.password !== data.confirmPassword) {
            setConfirmPassError('Password is not match')
            return
        }
        // setConfirmPassError(null);



        createUserWithEmailAndPass(data.email, data.password)
            .then(result => {
                console.log(result);
                updateUserProfile(data.name, data.image)

                const newUser = {
                    name: data.name,
                    email: data.email,
                    photoUrl: data.image,
                    role: "student"
                }
                console.log(newUser);
                axios.post(`https://a12-server-eight.vercel.app/users`, newUser)
                    .then(res => console.log(res.data))


                // signOutUser();
            })
            .catch(error => console.log(error))
    };


    const handleError = async () => {
        // Trigger form validation
        const isValidPass = await trigger();

        if (isValidPass) {
            handleSubmit(onSubmit)();
        }
    };


    useEffect(() => {
        user && navigate('/')
    }, [user, navigate])



    return (
        <div className="">
            <div className="hero min-h-screen bg-base-200 py-8 md:pt-36">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body md:w-[555px]">
                        <div className="border-l-4 border-red-500 pl-3">
                        <h4 className="uppercase font-bold text-4xl text-red-500 font-serif">register</h4>
                        </div>
                        <hr />


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name*</span>
                                </label>
                                <input type="name"  {...register("name", { required: true })} placeholder="name" className="input " />
                                {errors?.name?.type === 'required' && <span className="text-yellow-500 font-bold">Field is required.</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email*</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} placeholder="email" className="input " />
                                {errors?.email?.type === 'required' && <span className="text-yellow-500 font-bold">Field is required.</span>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password*</span>
                                </label>
                                <input type="password" {...register("password",
                                    {
                                        required: true, minLength: 6, pattern: {
                                            value: /^(?=.*[A-Z])(?=.*[!@#$&%*]).*$/,
                                            message: 'Password must contain at least one capital letter and one special character (!@#$&*)',

                                        }
                                    }
                                )}
                                    placeholder="password" className="input " />
                                {errors.password && <p className="text-yellow-500 font-bold">{errors.password?.message}</p>}
                                {errors?.password?.type === 'required' && <span className="text-yellow-500 font-bold">Field is required.</span>}
                                {errors?.password?.type === 'minLength' && <span className="text-yellow-500 font-bold">Password less then 6 characters</span>}


                                <label className="label">
                                    {/* <a href="#" className="label-text-alt link link-hover">TODO</a> */}
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password*</span>
                                </label>
                                <input type="password" {...register("confirmPassword",
                                    {
                                        required: true, minLength: 6, pattern: {
                                            value: /^(?=.*[A-Z])(?=.*[!@#$&%*]).*$/,
                                            message: 'Password must contain at least one capital letter and one special character (!@#$&*)',

                                        }
                                    }
                                )}
                                    placeholder="confirm password" className="input " />
                                {errors.confirmPassword && <p className="text-yellow-500 font-bold">{errors.password?.message}</p>}
                                {errors?.confirmPassword?.type === 'required' && <span className="text-yellow-500 font-bold">Field is required.</span>}
                                {errors?.confirmPassword?.type === 'minLength' && <span className="text-yellow-500 font-bold">Password less then 6 characters</span>}

                                {confirmPassError && <span className="text-yellow-500 font-bold">{confirmPassError}</span>}


                                <label className="label">
                                    {/* <a href="#" className="label-text-alt link link-hover">TODO</a> */}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL*</span>
                                </label>
                                <input type="url" {...register("image", { required: true })} placeholder="image" className="input " />

                            </div>


                            <div className="form-control mt-6">
                                <button type="submit" onClick={handleError} className="summerCampBtn">Register</button>
                            </div>
                        </form>
                        <div className=" flex justify-center flex-col items-center gap-4 pb-10 md:w-1/2 mx-auto">
                            <p>All ready have an account <Link to={'/login'} className="font-bold text-red-500">login now.
                            </Link></p>
                            <SocialLogin></SocialLogin>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;