import CountInfo from "../CountInfo/CountInfo";
import Faq from "../FAQ/Faq";
import OurAwards from "../OurAwards/OurAwards";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Safety from "../Safety/Safety";
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
            <Faq></Faq>
            {/* <Safety></Safety> */}
            <CountInfo></CountInfo>
        </div>
    );
};

export default Home;