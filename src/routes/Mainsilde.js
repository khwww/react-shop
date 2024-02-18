import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../img/image1.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";
import image4 from "../img/image4.jpg";
import image5 from "../img/image5.jpg";
import image6 from "../img/image6.jpg";

export default class Mainsilde extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={image1} alt="image1" />
          </div>
          <div>
            <img src={image2} alt="image2" />
          </div>
          <div>
            <img src={image3} alt="image3" />
          </div>
          <div>
            <img src={image4} alt="image4" />
          </div>
          <div>
            <img src={image5} alt="image5" />
          </div>
          <div>
            <img src={image6} alt="image6" />
          </div>
        </Slider>
      </div>
    );
  }
}