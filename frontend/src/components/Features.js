import pic1 from "../assets/f1.jpg";
import pic2 from "../assets/f2.jpg";
import pic3 from "../assets/f3.jpg";
import pic4 from "../assets/f4.jpg";
import pic5 from "../assets/f5.jpg";
import React from 'react';

function Features() {
    return(
        <section id="feature" className="section-p1">
            <div className="fe-box">
                <img src={pic1} alt="" />
                <h6>Masks</h6>
            </div>
            <div className="fe-box">
                <img src={pic2} alt="" />
                <h6>Batik</h6>
            </div>
            <div className="fe-box">
                <img src={pic3} alt="" />
                <h6>Brass & copper work</h6>
            </div>
            <div className="fe-box">
                <img src={pic4} alt="" />
                <h6>Pottery</h6>
            </div>
            <div className="fe-box">
                <img src={pic5} alt="" />
                <h6>Lacquer work</h6>
            </div>
        </section>
    );
}

export default Features;