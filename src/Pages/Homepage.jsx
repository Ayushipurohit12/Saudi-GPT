import React from "react";

import Home from "../Component/home";
import AboutUs from "../Component/aboutus";
import Slider from "../Component/slider";
import Place from "../Component/place";
import Register from "../Component/Register";
import Footer from "../Component/footer";

function Homepage(){
    return(
<>
<Home/>
<AboutUs />
<Slider />
<Place />
<Register />
<Footer />
</>
    );
}

export default Homepage;