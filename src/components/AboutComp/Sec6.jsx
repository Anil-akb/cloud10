import React from "react";
import Slider from "react-slick";

import "../../styles/sec6.css";
import ava01 from "../../images/testimonial.jpg";

const Sec6 = () => {
  const settings = {
    dots:false,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  }
  return (
    <section>
      <div className="container">
        <div className="slider_content-top">
          <h6 className="subtitle">Testimonial</h6>
        </div>
      </div>
    </section>
  );
};

export default Sec6;
