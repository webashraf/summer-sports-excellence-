import { Link } from 'react-router-dom';
import animationData2 from '../../../public/cricket_error.json';
import Lottie from 'react-lottie';

const ErrorPage = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData2,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className='bg-[url("https://images.pexels.com/photos/2862718/pexels-photo-2862718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-cover bg-no-repeat h-screen'>
            <div className='bg-[#00000036] h-full'>
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
                <div className='text-center border-double border-b-8 border-b-red-600 py-6 w-1/2 mx-auto  shadow-2xl shadow-slate-300'>
                    <h1 className='text-7xl text-red-600 font-serif uppercase '>404 error!!</h1>
                    <Link to={"/"} className='btn bg-black text-white text-xl font-bold hover:text-red-500'>Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;