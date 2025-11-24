import React, { useState } from "react";
import IndividualProduct from "../product/individualproduct";
import './landingpagebody.css';
import image from '../../assert/pexels-pramodtiwari-14127564.jpg';
function Landingpagebody() {

  return (
    <div>
    <div className="landingPage1"> 
      <h1>Welcome to DhanushKart</h1>
      <p>Your one-stop shop for all your needs!</p>
    </div>
    <div className="hero-section">
      <img src={image} alt="Landing Page" />
      <p className="hero-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate recusandae nemo id iste explicabo vitae excepturi consequatur obcaecati veniam, molestias soluta quidem dicta eaque qui nam esse porro voluptatibus nobis!
      </p>
      <p className="hero-subtext">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, dolor unde mollitia quidem impedit consequuntur beatae ipsum explicabo error non atque nisi tenetur aperiam iste neque iure laudantium? Laudantium, dolorem!
      </p>
    </div>
    </div>
  );
}
export default Landingpagebody;