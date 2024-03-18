import React from "react";
import '../Assets/footer.css'

function Footer(){
    return(
        <>
        <div className="bg-danger">
    <div class="container ">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top text-light ">
    <div class="col mb-3">
        <h3>SAUDI GPT</h3>
      <p class="footer">2023, Sahastra Rawal</p>
    </div>
    <div class="col mb-3">
      <h5>PLACES</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2">Rihad</li>
        <li class="nav-item mb-2">cyra</li>
        <li class="nav-item mb-2">city Name </li>
        <li class="nav-item mb-2"><a>city Name</a></li>
        <li class="nav-item mb-2"><a>city Name</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>ACTIVITES</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2">Beach</li>
        <li class="nav-item mb-2">carnel Riding</li>
        <li class="nav-item mb-2">camping</li>
        <li class="nav-item mb-2">Data</li>
        <li class="nav-item mb-2">Data</li>
      </ul>
    </div>

    <div class="col mb-3 ">
      <h5>CONTACT</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2">+18-000-999-888</li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>SOCIALS</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2">Instagram</li>
        <li class="nav-item mb-2">Twitter</li>
      </ul>
    </div>

  </footer>
</div>
</div>
        </>

    );
}

export default Footer;