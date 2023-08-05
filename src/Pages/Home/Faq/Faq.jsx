import Heading from '../../../Shared/Heading/Heading';
import './Faq.css'




const Faq = () => {
    return (
        <div>
            <Heading pText={'See our Common Faq'} hText={'Frequently Ask Question'}></Heading>
            <div className={`bg-[url('https://images.pexels.com/photos/258395/pexels-photo-258395.jpeg')] bg-cover bg-bottom bg-fixed py-10`}>

                <div className='h-[400px] overflow-scroll overflow-x-hidden custom-scrollbar'>
                    <>
                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-primary">Q: What age groups do you cater to at the Summer Sports Excellence?</div>
                        </div>
                        <div className="chat chat-end w-full lg:ml-auto">
                            <div className="chat-bubble chat-bubble-primary">A: Our Summer Sports Excellence welcomes participants aged 6 to 16 years old. We provide age-appropriate programs and coaching tailored to each group's skill level.</div>
                        </div>
                    </>

                    <>
                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-secondary">Q: What sports are offered at the Summer Sports Excellence?</div>
                        </div>
                        <div className="chat chat-end w-full lg:ml-auto">
                            <div className="chat-bubble chat-bubble-secondary">A: We offer a diverse range of sports to cater to different interests.</div>
                        </div>
                        <div className="chat chat-end w-full lg:ml-auto">
                            <div className="chat-bubble chat-bubble-secondary">Some of the sports available include soccer, basketball, swimming, tennis, and athletics.</div>
                        </div>
                        <div className="chat chat-end w-full lg:ml-auto">
                            <div className="chat-bubble chat-bubble-secondary">Our experienced coaches ensure a well-rounded and enjoyable experience for all participants.</div>
                        </div>
                    </>

                    <>
                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-accent">Q: What safety measures do you have in place to protect the participants during the summer programs?</div>
                        </div>
                        <div className="chat chat-end w-full lg:ml-auto">
                            <div className="chat-bubble chat-bubble-accent">A: The safety of our participants is a top priority.
                            </div>
                        </div>
                        <div className="chat chat-end w-full lg:ml-auto">
                            <div className="chat-bubble chat-bubble-accent">We maintain a low coach-to-participant ratio to ensure personalized attention and safety.
                            </div>
                        </div>
                        <div className="chat chat-end w-full lg:ml-auto">
                            <div className="chat-bubble chat-bubble-accent">Our facilities are regularly inspected and maintained, and all coaches are certified and trained in first aid.
                            </div>
                        </div>
                        <div className="chat chat-end w-full lg:ml-auto">
                            <div className="chat-bubble chat-bubble-accent">Additionally, we strictly adhere to local health and safety guidelines to create a secure environment for all participants.
                            </div>
                        </div>
                    </>

                    <>
                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-info">Q: What are the dates and duration of the summer programs?</div>
                        </div>
                        <div className="chat chat-end w-full lg:ml-auto">
                            <div className="chat-bubble chat-bubble-info">Our Summer Sports Excellence runs multiple sessions throughout the summer. </div>
                        </div>
                        <div className="chat chat-end w-full lg:ml-auto">
                            <div className="chat-bubble chat-bubble-info">Each session typically lasts for two weeks, and the dates are scheduled to coincide with local school vacations. </div>
                        </div>
                        <div className="chat chat-end w-full lg:ml-auto">
                            <div className="chat-bubble chat-bubble-info">You can find specific dates on our website or by contacting our customer support.</div>
                        </div>
                    </>

                    <>
                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-success">Q: Are the programs suitable for beginners or only for experienced athletes?</div>
                        </div>
                        <div className="chat chat-end w-full lg:ml-auto">
                            <div className="chat-bubble chat-bubble-success">A: Our programs are designed to cater to all skill levels, from beginners to advanced athletes. </div>
                        </div>
                        <div className="chat chat-end w-full lg:ml-auto">
                            <div className="chat-bubble chat-bubble-success">Our experienced coaches assess each participant's abilities and tailor the training to ensure everyone benefits and improves their skills, regardless of their starting point.</div>
                        </div>
                    </>

                    <>
                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-warning">Q: How do I register my child for the Summer Sports Excellence programs?</div>
                        </div>
                        <div className="chat chat-end w-full lg:ml-auto">
                            <div className="chat-bubble chat-bubble-warning">A: Registering your child is easy and can be done online through our website.</div>
                        </div>
                        <div className="chat chat-end w-full lg:ml-auto">
                            <div className="chat-bubble chat-bubble-warning">Simply navigate to the "Registration" page, select the desired program, and fill out the necessary information. </div>
                        </div>
                        <div className="chat chat-end w-full lg:ml-auto">
                            <div className="chat-bubble chat-bubble-warning">Our secure payment system ensures a smooth and hassle-free registration process.</div>
                        </div>
                    </>

                    <>
                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-error">Q: What should my child bring to the sports school each day?</div>
                        </div>
                        <div className="chat chat-end w-full lg:ml-auto">
                            <div className="chat-bubble chat-bubble-error">A: Participants should come prepared with comfortable athletic clothing, sports shoes suitable for the chosen activities, a water bottle, and sunscreen.</div>
                        </div>
                        <div className="chat chat-end w-full lg:ml-auto">
                            <div className="chat-bubble chat-bubble-error">For specific sports such as swimming or tennis, they may need additional equipment, which will be communicated during the registration process.</div>
                        </div>
                    </>
                    <>
                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-error">

                                <span className="loading loading-dots loading-sm"></span>

                            </div>
                        </div>
                    </>
                </div>

                <div className='py-3 flex justify-center flex-col'>
                    <input value={"My next question is"} style={{outline: 'none !important', borderRadius: "30px !important"}} type="text" placeholder="Type here" className="faqInput input input-bordered input-success w-full max-w-xs mx-auto" />
                    <div>
                        <div className="flex justify-center gap-1 my-1 w-full mt-5">
                            <kbd className="kbd">q</kbd>
                            <kbd className="kbd">w</kbd>
                            <kbd className="kbd">e</kbd>
                            <kbd className="kbd">r</kbd>
                            <kbd className="kbd">t</kbd>
                            <kbd className="kbd">y</kbd>
                            <kbd className="kbd">u</kbd>
                            <kbd className="kbd">i</kbd>
                            <kbd className="kbd">o</kbd>
                            <kbd className="kbd">p</kbd>
                        </div>
                        <div className="flex justify-center gap-1 my-1 w-full">
                            <kbd className="kbd">a</kbd>
                            <kbd className="kbd">s</kbd>
                            <kbd className="kbd">d</kbd>
                            <kbd className="kbd">f</kbd>
                            <kbd className="kbd">g</kbd>
                            <kbd className="kbd">h</kbd>
                            <kbd className="kbd">j</kbd>
                            <kbd className="kbd">k</kbd>
                            <kbd className="kbd">l</kbd>
                        </div>
                        <div className="flex justify-center gap-1 my-1 w-full">
                            <kbd className="kbd">z</kbd>
                            <kbd className="kbd">x</kbd>
                            <kbd className="kbd">c</kbd>
                            <kbd className="kbd">v</kbd>
                            <kbd className="kbd">b</kbd>
                            <kbd className="kbd">n</kbd>
                            <kbd className="kbd">m</kbd>
                            <kbd className="kbd">/</kbd>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;