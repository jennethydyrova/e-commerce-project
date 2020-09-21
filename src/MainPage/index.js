import React from "react";
import { Button } from "react-bootstrap";
import pic1 from './images/1pic.png'
import pic2 from './images/2pic.png'
import pic3 from './images/3pic.png'
import pic4 from './images/4pic.png'
import pic6 from './images/6pic.png'
import pic7 from './images/7pic.png'
import pic8 from './images/8pic.png'
import pic9 from './images/9pic.png'


const Page = () => {
  
  return (
 
 <div class="position-relative overflow-hidden text-center" id="main-page" >
  <div class="col-md-8 p-lg-5 mx-auto my-5">
    <h1 class="display-8 font-weight-normal">Let your inner beauty shine</h1>
    <p class="lead font-weight-normal">Shop the best products for makeup and skin care. <br/>Allergy Tested. 100% Fragrance Free.</p>
    <a class="btn btn-outline-secondary" href="#">Check our Products</a>
  </div>
  
  <div className="hover-div">
  <img src={pic2} alt="pic2" class="pic2 d-none d-md-block"/>
  <img src={pic4} alt="pic4" class="pic4 d-none d-md-block"/>
  <img src={pic9} alt="pic9" class="pic9 d-none d-md-block"/>
  </div>

 <img src={pic1} alt="pic1" class="pic1 d-none d-md-block"/>
 <img src={pic3} alt="pic3" class="pic3 d-none d-md-block"/>
 <img src={pic6} alt="pic6" class="pic6 d-none d-md-block"/>
 <img src={pic7} alt="pic7" class="pic7 d-none d-md-block"/>
 <img src={pic8} alt="pic8" class="pic8 d-none d-md-block"/>
 

 
</div>

  );
};

export default Page;