import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles  from './slider.module.scss'

export default function SimpleSlider(props) {
  var settings = {
    swipeToSlide:true,
    speed: 500,
    slidesToShow: 16,
    slidesToScroll: 4,
    
  }
  return (
    <Slider {...settings} className={styles.slider}>
      {props.children}
    </Slider>
  );
}
