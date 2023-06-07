import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";
const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className=" flex justify-center flex-col items-center gap-4 pb-10 w-1/2 mx-auto">
                            <p>New here please <Link to={'/register'} className="font-bold text-red-500">Register.
                            </Link></p>

                            <button className="btn btn-block bg-[#f4f4f4] shadow-2xl font-bold text-xl -tracking-tight"><FcGoogle></FcGoogle><span className="-ml-[6px] ">oogle</span></button>

                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Login;