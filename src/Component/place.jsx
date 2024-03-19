import React from "react";
import  '../Assets/place.css'

function Place() {
    return (
        <>
            <section>
           <div className="mt-5">
            <video src="/Assets/WhatsApp Video 2024-03-18 at 2.37.22 PM.mp4" autoPlay  loop className="video"/>
                <div className="p-0 d-flex justify-content-between  text-light">
                    <div className="p-1">
                        <h2 >Not JUST A Desert</h2>
                        <h1 className="mt-5">PLace Name </h1>
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
                        <div className="side-image ">
                        <img src='Assets/images.jpg'  className="image-1 px-1 py-1 mb-5 bg-white me-3" />
                        <img src='Assets/images.jpg' className=" image-1 px-1 py-1  mb-5 bg-white me-3" />
                        <img src='Assets/images.jpg' className=" image-1 px-1 py-1 mb-5 bg-white me-5" />
                    </div>
                </div>
                </div>


            </section>
        </>
    );
}

export default Place;