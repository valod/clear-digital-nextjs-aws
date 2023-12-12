'use client'
import React from 'react';
import Slider from 'react-slick';
import style from './styles/halfslider.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

// slides.json
const sliderdata = [
    {
       "bgimg": "/cardbg.png",
       "cardcontent": "Google Analytics 4 is Coming. Is Your B2B Ready?",
       "medium": "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
    },
    {
     

      "bgimg": "/cardbg.png",
      "cardcontent": "Google Analytics 4 is Coming. Is Your B2B Ready?",
      "medium": "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
    },
    {
    

      "bgimg": "/cardbg.png",
      "cardcontent": "Google Analytics 4 is Coming. Is Your B2B Ready?",
      "medium": "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
    }
  ]
  

// ... (other imports)

const SlickSlider = ({ slides }) => {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,  // Enable center mode
      centerPadding: '0 0 150px',
    };
  
    return (
      <div className={`wrapper ${style.wrapper} w-full relative flex flex-wrap`}>
        {/* Adjust the content based on your needs */}
        <div className={`contentwrpper ${style.contentwrpper}`}>
          <h3 className={`contenttxt ${style.contenttxt}`}>Clear Digital news, thoughts, and insights.</h3>
          <p>Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.</p>
          <div className={`btnwrap ${style.btnwrap}`}>
            {/* Fix the Link component */}
            <Link href="" className='pink-btn'>
            View all Insights
            </Link>
          </div>
        </div>
        {/* Fix the closing tag of Slider component */}
        <Slider {...settings}>
          {sliderdata.map((slide, index) => (
            <div className={`imgwrapper ${style.imgwrapper} relative`} key={index}>
              <div className={`imgwrap ${style.imgwrap} relative`}>
                <div className={`bgimg ${style.bgimg} relative`}>
                  <img src={slide.bgimg} alt="" />
                </div>
                <div className={`ctwrapper ${style.ctwrapper}`}>
                  <h5 className={`cardcontent ${style.cardcontent}`}>{slide.cardcontent}</h5>
                  <p className={`medium ${style.medium}`}>{slide.medium}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  const Halfslider = () => {

    useEffect(() => {
        const section = document.getElementsByClassName('halfslider')[0]
        const slide = section.getElementsByClassName('slick-slider')[0]
        const prev = section.getElementsByClassName('slick-prev')[0]
        const next = section.getElementsByClassName('slick-next')[0]
        prev.classList.add(`${style.prevArrow}`)
        next.classList.add(`${style.nextArrow}`)
        slide.classList.add(`${style.slide}`)
        console.log(slide);
      }, [])


    return (
      <section className={`halfslider ${style.halfslider} py-40`}>
        <div className="container">
          <div className="slider_wrapper relative w-full overflow-hidden">
            <SlickSlider slides={sliderdata} />
          </div>
        </div>
      </section>
    );
  };
  
  export default Halfslider;
  
  


