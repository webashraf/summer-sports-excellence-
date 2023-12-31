import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
const Login = () => {
    const { loginUserWithEmailPass, signInWithGoogle, user } = useAuth();
    const { register, handleSubmit, formState: { errors }, trigger } = useForm();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    const navigate = useNavigate();
    console.log(from);







    const onSubmit = (data) => {
        // console.log(data)
        loginUserWithEmailPass(data.email, data.password)
            .then(result => {
                console.log(result);
                const newUser = {
                    name: data.name,
                    email: data.email,
                    photoUrl: result.user.photoURL
                }
                console.log(newUser);
                axios.post(`https://a12-server-eight.vercel.app/users`, newUser)
                    .then(res => console.log(res.data))
            })
            .catch(errors => console.log(errors))

    };


    const handleError = async () => {
        // Trigger form validation
        const isValidPass = await trigger();

        if (isValidPass) {
            handleSubmit(onSubmit)();
        }
    };


    useEffect(() => {
        user && navigate(from);
    }, [from, navigate, user])

    return (
        <div className="py-20 bg-base-200">
            <div className="w-[800px] mx-auto text-center">
            <h1 className=" text-3xl font-serif text-red-500 uppercase">Just Click Login <br></br> to see admin dashboard more feature</h1>
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body md:w-[555px]">
                            <div className="border-l-4 border-red-500 pl-3">
                                <h4 className="uppercase font-bold text-4xl text-red-500 font-serif">login</h4>
                            </div>
                            <hr />


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" defaultValue={"aliashraftamim2@gmail.com"}  {...register("email", { required: true })} placeholder="email" className="input" />
                                {errors?.email?.type === 'required' && <span className="text-yellow-500 font-bold focus-visible:border-none">Field is required.</span>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" defaultValue={"aliAshraftamim2@"} {...register("password",
                                    {
                                        required: true, minLength: 6, pattern: {
                                            value: /^(?=.*[A-Z])(?=.*[!@#$&%*]).*$/,
                                            message: 'Password must contain at least one capital letter and one special character (!@#$&*)',

                                        }
                                    }
                                )}
                                    placeholder="password" className="input" />
                                {errors.password && <p className="text-yellow-500 font-bold">{errors.password?.message}</p>}
                                {errors?.password?.type === 'required' && <span className="text-yellow-500 font-bold">Field is required.</span>}
                                {errors?.password?.type === 'minLength' && <span className="text-yellow-500 font-bold">Password less then 6 characters</span>}


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                            <div className="form-control mt-6">
                                <button type="submit" onClick={handleError} className="summerCampBtn">Login</button>
                            </div>
                        </form>
                        <div className=" flex justify-center flex-col items-center gap-4 pb-10 md:w-1/2 mx-auto">
                            <p>New here please <Link to={'/register'} className="font-bold text-red-500">Register.
                            </Link></p>

                            <SocialLogin></SocialLogin>

                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Login;