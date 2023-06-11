import axios from 'axios';
import { useEffect, useState } from 'react';
import Heading from '../../../Shared/Heading/Heading';

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    axios.get(`https://a12-server-eight.vercel.app/instructors`)
      .then(res => setInstructors(res.data))
  }, [])
  console.log(instructors);


  return (
    <>

      <Heading pText={'Our Populer Instructors'} hText={'Popular Instructors'}></Heading>
      <div className="px-10 bg-[url('https://images.pexels.com/photos/269948/pexels-photo-269948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#101010bc]">
          {
            instructors?.slice(0, 6).map(instructor => <div key={instructor._id} className="card md:w-96 bg-[#ffffff] shadow-2xl">
              <figure className="px-10 pt-10 w-[150px] h-[150px] rounded-full overflow-hidden mx-auto ">
                <img src={instructor?.photoUrl} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center p-5">


                <div className='flex flex-col justify-center items-center space-y-1'>
                  <h2 className="card-title text-xl font-light"><span className="font-bold">Name : </span>{instructor?.name}</h2>
                  <p className="text-md font-light"><span className="font-bold">Email : </span>{instructor?.email}</p>
                  <p className="text-md"><span className="font-bold">Total Class : </span>{instructor?.totalClass ? instructor?.totalClass : 0}</p>

                </div>


                <div className="card-actions mt-auto">
                  <button className="btn btn-outline btn-sm">See More Info</button>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    </>
  );
};

export default PopularInstructor;