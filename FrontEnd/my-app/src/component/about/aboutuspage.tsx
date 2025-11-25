import React from 'react';
import './aboutuspage.css';
function AboutUsPage() {
    return (
        <div className="about-us-page">
            <h1 >About Us</h1>
            <p>Welcome to DhanushKart! We are committed to providing the best shopping experience.</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, et atque voluptatem quod error numquam accusantium natus, animi quae a eaque sunt reiciendis, nam voluptatibus. Perferendis sunt aspernatur eum eos?
            </p>
            <div className="conatinor-Aboutus"> 
                <div className="mission-section">
                    <h2>Our Mission</h2>
                    <p>To deliver quality products at your doorstep with utmost convenience.</p>
                </div>
                <div className="team-section">
                    <h2>Our Team</h2>
                    <p>We have a dedicated team of professionals working tirelessly to serve you better.</p>
                </div>
                <div className="contact-section">
                    <h2>Contact Us</h2>
                    <p>If you have any questions, feel free to reach out to us at contact@dhanushkart.com.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUsPage;