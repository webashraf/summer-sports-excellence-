import OurAwards from "../OurAwards/OurAwards";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Slider from "../Slider/Slider";
import WhySports from "../WhySports/WhySports";
 

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <WhySports></WhySports>
            <OurAwards></OurAwards>
        </div>
    );
};

export default Home;