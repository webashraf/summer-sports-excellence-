import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
const Login = () => {
    const { loginUserWithEmailPass, signInWithGoogle } = useAuth();
    const { register, handleSubmit, formState: { errors }, trigger } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        loginUserWithEmailPass(data.email, data.password)
            .then(result => console.log(result))
            .catch(errors => console.log(errors))

    };


    const handleError = async () => {
        // Trigger form validation
        const isValidPass = await trigger();

        if (isValidPass) {
            handleSubmit(onSubmit)();
        }
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body w-[555px]">


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors?.email?.type === 'required' && <span className="text-yellow-500 font-bold">Field is required.</span>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password",
                                    // {
                                    // required: true, minLength: 6, pattern: {
                                    //     value: /^(?=.*[A-Z])(?=.*[!@#$&%*]).*$/,
                                    //     message: 'Password must contain at least one capital letter and one special character (!@#$&*)',

                                    // }
                                    // }
                                )}
                                    placeholder="password" className="input input-bordered" />
                                {errors.password && <p className="text-yellow-500 font-bold">{errors.password?.message}</p>}
                                {errors?.password?.type === 'required' && <span className="text-yellow-500 font-bold">Field is required.</span>}
                                {errors?.password?.type === 'minLength' && <span className="text-yellow-500 font-bold">Password less then 6 characters</span>}


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                            <div className="form-control mt-6">
                                <button type="submit" onClick={handleError} className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className=" flex justify-center flex-col items-center gap-4 pb-10 w-1/2 mx-auto">
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