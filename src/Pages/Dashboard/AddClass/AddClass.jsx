import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
const AddClass = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useAuth()
    const onSubmit = data => {
        // console.log(data)
        const classData = {

            className: data.className,
            instructorEmail: data.instructorEmail,
            instructorName: data.instructorName,
            photoUrl: data.photoUrl,
            price: parseFloat(data.price),
            seats: parseInt(data.seats),
            status: 'pending',
        }
        console.log(classData);
        axios.post('https://a12-server-eight.vercel.app/addclass', classData)
            .then(data => {
                console.log(data.data)
                reset()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class successfully added',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
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
                                        <span className="label-text">Class Name*</span>
                                    </label>
                                    <input type="text"  {...register("className", { required: true })} placeholder="name" className="input input-bordered " />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Class Image*</span>
                                    </label>
                                    <input type="url"  {...register("photoUrl", { required: true })} placeholder="class image" className="input input-bordered " />
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Instructor Name*</span>
                                    </label>
                                    <input type="text" defaultValue={user?.displayName} readOnly  {...register("instructorName", { required: true })} placeholder="name" className="input input-bordered " />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Instructor Email*</span>
                                    </label>
                                    <input type="email" defaultValue={user?.email} readOnly  {...register("instructorEmail", { required: true })} placeholder="name" className="input input-bordered " />
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Available Seats*</span>
                                    </label>
                                    <input type="number"  {...register("seats", { required: true })} placeholder="seats" className="input input-bordered " />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Price</span>*
                                    </label>
                                    <input type="number"  {...register("price", { required: true })} placeholder="price" className="input input-bordered " />
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