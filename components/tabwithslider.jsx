'use client'
import React from 'react';
import Slider from 'react-slick';
import style from './styles/tabwithslider.module.css';
import Image from 'next/image';

// slides.json
const sliderdata = [
    {
      "image": "/tabimg.svg",
      "alt": "img",
      "content": "Aenean aliquet malesuada quam et placerat. Suspendiss pellentes. Interdum et malesuada fames ac ante ipsum primis in."
    },
    {
      "image": "/tabimg.svg",
      "alt": "img",
      "content": "Another slide content goes here."
    },
    {
      "image": "/tabimg.svg",
      "alt": "img",
      "content": "Yet another slide content for the third slide."
    }
  ]
  

// ... (other imports)

const SlickSlider = ({ slides }) => {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,  // Enable center mode
      centerPadding: '0', 
    };
  
    return (
      <Slider {...settings}>
          {sliderdata.map((slide, index) => (
          <div key={index} className={`wrapper ${style.wrapper} w-full relative flex flex-wrap`}>
            {/* Adjust the content based on your needs */}
            <div className={`imgwrapper ${style.imgwrapper}`}>
            <img src={slide.image} alt={slide.alt} />
            </div>
               <div className={`contentwrapper ${style.contentwrapper}`}>
            <h3 className={`content ${style.content}`}>{slide.content}</h3>
          </div>
          </div>
        ))}
      </Slider>
    );
  };
  
  const Tabwithslider = () => {
   
    return (
      <section className="tabwithslider py-40 bg-black">
        <div className="container">
            <div className="slider_wrapper relative w-full">
            <SlickSlider slides={sliderdata} />
            </div>
        </div>
      </section>
    );
  };
  
  export default Tabwithslider;
  
