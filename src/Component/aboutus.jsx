import React, { useEffect } from "react";
import '../Assets/aboutus.css'
import Aos from "aos";

function Aboutus() {
    useEffect(() => {
        Aos.init();
      }, []);
    return (
        <>
            <section className="about text-danger  ">
                <h1 className="mt-0 aboutus">ABOUT US</h1>
                <div className="d-flex justify-content-center align-items ">
                    <div className=" ab-1 ms-5">
                        <h3 className="ab-3">"Explore the immense </h3>
                            <h3 className="ab-3">beauty of saudi" </h3>
                        <div className="border-0 bg-body ab-2">
                            <p>Embark on linguistic journey like never before with saudi GPT ,
                                </p>
                                <p> the quintessential AI platform designed for saudi Arabia. </p>
                                <p> Seamiessly weaving through the intricate fabric of arabic dialects , 
                                    </p>
                                    <p>saudiGPT redefines communication standards,</p>
                                    <p> empowering businesses and individuals to engage authentically 
                                    </p>
                                    <p>and effortlessly in the digital realm. </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-danger ">
               <div className="d-flex justify-content-center align-items mt-5">
                    <img src="/Assets/images.jpg"  className="mt-2 w-50 " data-aos="zoom-in" data-aos-delay="500"  />
                  </div>   
                    <div className="text-light w-100 mt-2 text-center">
                        <p> Explore our array of tailored AI solution designed specifically for saudi Arabia, including language translation , cultural context</p>
                        <p>
                        Understanding, personalized assistance,advanced data analysis, and more . Whether you're seeking insightful guidance,seamless</p>
<p>
                        communication,or innovative problem-solving, saudiGPT is here to empower your journey with cutting-edge technology fused with the</p> 
                        <p> rich cultural heritage of the kingdom.</p>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="d-flex justify-content-center align-items">
                    <div className="text-light ">
                        <div className="heading fw-semibold  text-light  "  data-aos="fade-right" data-aos-delay="200" >
                        SAUDI
                        </div>
                        <div className="rounded-circle">
                            <img src="Assets/images.jpg" className="rounded-circle image" />
                            <div className="d-flex justify-content-center align-items">
                                <p>The readme of new generation</p>
                            </div>
                            <div className="d-flex justify-content-center align-items ">
                                <button className="bg-black text-white border border-light-subtle">Try now</button>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Aboutus;