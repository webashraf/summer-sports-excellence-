import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
const AddClass = () => {
    const { register, handleSubmit, watch, formState: { errors }, trigger } = useForm();
    const {user} = useAuth()
    const onSubmit = data => {
        // console.log(data)
        const classData = {
            ...data,
            status: 'pending',

        }
        console.log(classData);
        axios.post('http://localhost:5000/addclass', classData)
        .then(data => console.log(data.data))
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-[800px] shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body w-[800px]">

                            <div className="flex gap-2">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Class Name</span>
                                    </label>
                                    <input type="text"  {...register("className")} placeholder="name" className="input input-bordered " />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Class Image</span>
                                    </label>
                                    <input type="url"  {...register("photoUrl")} placeholder="class image" className="input input-bordered " />
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Instructor Name</span>
                                    </label>
                                    <input type="text" defaultValue={user?.displayName} readOnly  {...register("instructorName")} placeholder="name" className="input input-bordered " />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Instructor Email</span>
                                    </label>
                                    <input type="email" defaultValue={user?.email} readOnly  {...register("instructorEmail")} placeholder="name" className="input input-bordered " />
                                </div>
                            </div>                            
                            
                            <div className="flex gap-2">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Available Seats</span>
                                    </label>
                                    <input type="number"  {...register("seats")} placeholder="name" className="input input-bordered " />
                                </div>                              
                                
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number"  {...register("price")} placeholder="name" className="input input-bordered " />
                                </div>
                 
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClass;