import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";
const AddClass = () => {
    const { register, handleSubmit, watch, formState: { errors }, trigger } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body w-[555px]">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input type="className"  {...register("name")} placeholder="name" className="input input-bordered" />
                            </div>                            

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClass;