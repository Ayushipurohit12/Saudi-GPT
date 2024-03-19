import React, { useEffect } from "react";
import '../Assets/slider.css';
import Aos from "aos";
function Slider() {
useEffect(() => {
        Aos.init();
      }, []);
    
    return (
        <>
    <section>
        <div className="d-flex justify-content-between mt-5 ">
            <div className="bg-danger w-50 ">
            <div className="s-0 border-2 bg-body rounded-4  mt-3 mb-3">
                <div className="s-1 ">
                 <div className=" text-danger fs-6 p-3 mt-5 " >
                    <div className='s-2 '>
                    <h4 className="fs-3">DISCOVER</h4>
                    <h4 className="fs-3">SAUDI ARABIA</h4>
                    <p> Welcome to saudi GPT
                        where cutting- edge AI meets the rich</p>
                    <p> cultural tapestry of Saudi Arabia,empowering  you with</p>
                    <p>  personalized insights and solutions tailored to your needs.</p>
                        <input className="w-50 text-black-50 bg-white border-0" type="text" />
                            <button className="bg-light-subtle border-0">
                                <i className="bi bi-mic-fill text-danger  border-0"></i></button>
                            <button className=" bg-light-subtle text-danger border-0">Search
                                <i class="bi bi-arrow-right ms-2"></i>
                            </button>
                            </div>

                            </div>
                            </div>
                              </div>
                                 </div>
          
                    <div className="s-3 p-2 text-danger">
                     <h1 className="d-flex justify-content-center p-2">SAUDI GPT</h1>
                     <div className="">
                     <p> Explore our array of tailored AI solution designed specifically for saudi Arabia, including language translation , cultural context</p>
                        <p>
                        Understanding, personalized assistance,advanced data analysis, and more . Whether you're seeking insightful guidance,seamless</p>
                      <p>
                        communication,or innovative problem-solving, saudiGPT is here to empower your journey with cutting-edge technology fused with the</p> 
                        <p> rich cultural heritage of the kingdom.</p>
                     </div>
                    </div>
                    </div> 
            </section>
            </>
    );

    }

    export default Slider;