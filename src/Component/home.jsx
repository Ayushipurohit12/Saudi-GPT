import React, { useEffect } from "react";

import '../Assets/home.css'
import Aos from "aos";


function Home() {
useEffect(() => {
        Aos.init();
      }, []);
    
    return (
        <>
            <section className="hero"  >
                <div className="home text-danger h-100 aos-init  " data-aos="fade-up" data-aos-delay="500">
                    <h1 className="fw-bold d-flex ">DISCOVER</h1>
                    <h1 className="fw-bold">SAUDI ARABIA</h1>
                    <p> Welcome to saudi GPT
                        where cutting- edge AI meets the rich</p>
                    <p> cultural tapestry of Saudi Arabia,empowering  you with</p>
                    <p>  personalized insights and solutions tailored to your needs.</p>
                        <input className="hero-home w-50 text-black-50 bg-white border-0" type="text" />
                            <button className=" hero-home bg-light-subtle border-0">
                                <i className="bi bi-mic-fill text-danger  border-0"></i></button>
                            <button className=" hero-home bg-light-subtle text-danger border-0">Search
                                <i class="bi bi-arrow-right ms-2"></i>
                            </button>
                    </div>
            </section>
            <section>
             <div className="page text-danger">
             <img src="Assets/images.jpg" className="page-home aos-init" data-aos="fade-left" data-aos-delay="500" />
                    <h1 className="fw-bold fs-1 ">WHAT WE OFFER ? </h1>
                    <p> Explore our array of tailored AI solution designed specifically for </p> 
                    <p>Saudi Arabia , including language translation, cultural context </p>
                    <p>Understanding, personalized assistance, advanced data</p>
                    <p> analysis , and more. Whether you're seeking insightful guidance,</p>
                    <p> seamless communication , or innovative problem-solving ,Saudi  </p>
                    <p>GPT is here to empower your journey with cutting - edge</p>
                    <p> technology fused with the rich cultural heritage of the kingdom.  </p>
                    <div >
                    <img src="Assets/images.jpg" data-aos="fade-right" data-aos-delay="00"  />
                    <img src="Assets/images.jpg" className="me-2 ms-2"  data-aos="fade-right" data-aos-delay="100" />
                    <img src="Assets/images.jpg" data-aos="fade-right" data-aos-delay="200"  />
                    </div>
                </div>
            </section>

            
        </>
    )
}

export default Home;