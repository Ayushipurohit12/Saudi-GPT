import React, { useEffect } from "react";
import '../Assets/register.css'
import Aos from "aos";
function Register(){
  useEffect(() => {
    Aos.init();
  }, []);
    return(
    <section>
        <div className="d-flex justify-content-between mt-5 ">
            <img src="/Assets/images.jpg"  className="w-50 r-1 " data-aos="fade-right"  data-aos-delay="500" />
               <div className="px-2 text-danger r-2">
                     <h1 className="p-2">REGISTER RIGHT AWAY </h1>
                     <div className="p-2">
                      <p> Explore our array of tailored AI solution designed specifically for saudi Arabia, including language translation , cultural context</p>
                        <p>
                        Understanding, personalized assistance,advanced data analysis, and more . Whether you're seeking insightful guidance,seamless</p>
                      <p>
                        communication,or innovative problem-solving, saudiGPT is here to empower your journey with cutting-edge technology fused with the</p> 
                        <p> rich cultural heritage of the kingdom.</p>
                     </div>
                     <form className="mt-5" >
                        <div className="text-danger">
                        <label>Email</label>
                        </div>
                        <input type="email" text='email' placeholder="Enter yout Email"  className=" border border-danger w-50"/>
                          <button className="ms-5 bg-danger text-white border-white">Submit</button>     
                       </form>
                    </div>
                    </div> 
            </section>
    );
  }
        export default Register;