import animationData1 from '../../../../public/football_animation.json';
// import { Lottie } from 'react-lottie';
import Lottie from 'react-lottie';

const WhySports = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData1,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className='flex items-center my-36 px-10'>

            <div className="w-[60%] py-8">
                <div className=" mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-4">Why Sports for Children?</h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-600 text-left mb-8">
                        Engaging in sports activities can be highly beneficial for children's physical, mental, and social development. Here are some key reasons why sports are important for children:
                    </p>
                    <ul className="text-base md:text-lg lg:text-xl text-gray-700">
                        <li className="mb-2">
                            <span className="mr-2">&#8226;</span>
                            Physical Fitness: Regular participation in sports helps improve cardiovascular health, motor skills, coordination, and overall fitness levels.
                        </li>
                        <li className="mb-2">
                            <span className="mr-2">&#8226;</span>
                            Mental Well-being: Sports instill discipline, boost self-confidence, reduce stress, and promote mental resilience and focus.
                        </li>
                        <li className="mb-2">
                            <span className="mr-2">&#8226;</span>
                            Social Skills: Team sports teach children about cooperation, teamwork, leadership, communication, and sportsmanship.
                        </li>
                        <li className="mb-2">
                            <span className="mr-2">&#8226;</span>
                            Character Building: Sports teach valuable life lessons such as perseverance, dedication, goal-setting, and handling success and failure.
                        </li>
                        <li className="mb-2">
                            <span className="mr-2">&#8226;</span>
                            Healthy Habits: Being involved in sports encourages a healthy and active lifestyle, reducing the risk of obesity and related health issues.
                        </li>
                    </ul>
                </div>
            </div>
            <div>

                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
            </div>
        </div>
    );
};

export default WhySports;
