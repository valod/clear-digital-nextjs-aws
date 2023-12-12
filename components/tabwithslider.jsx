'use client'
import React from 'react';
import Slider from 'react-slick';
import style from './styles/tabwithslider.module.css';
import Image from 'next/image';
import { useEffect } from 'react';

// slides.json
const sliderdata = [
  {
    "image": "/tabimg.svg",
    "alt": "img",
    "content": "Aenean aliquet malesuada quam et placerat. Suspendiss pellentes. Interdum et malesuada fames ac ante ipsum primis in.",
    "txt": "Jane Doe, CEO",
    "img": "/Cohesity.png"
  },
  {
    "image": "/tabimg.svg",
    "alt": "img",
    "content": "Another slide content goes here.",
    "txt": "Jane Doe, CEO",
    "img": "/Cohesity.png"
  },
  {
    "image": "/tabimg.svg",
    "alt": "img",
    "content": "Yet another slide content for the third slide.",
    "txt": "Jane Doe, CEO",
    "img": "/Cohesity.png"
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
            <Image src={slide.image} alt={slide.alt} width={100} height={100} className='w-full h-full object-cover' />
          </div>
          <div className={`contentwrapper ${style.contentwrapper} relative`}>
            <h3 className={`content ${style.content}`}>{slide.content}</h3>
            <span className={`txt ${style.txt}`}>{slide.txt} </span>
            <div className={`imgwrap ${style.imgwrap}`}>
              <Image src={slide.img} alt={slide.img} width={100} height={100} />
            </div>
          </div>
        </div>
      ))}

    </Slider>

  );
};

const Tabwithslider = () => {

  useEffect(() => {
    const section = document.getElementsByClassName('tabwithslider')[0]
    const prev = section.getElementsByClassName('slick-prev')[0]
    const next = section.getElementsByClassName('slick-next')[0]
    prev.classList.add(`${style.prevArrow}`)
    next.classList.add(`${style.nextArrow}`)
    console.log(next);
  }, [])


  return (<>
    <section className="tabwithslider py-40 bg-black">
      <div className="container">
        <div className=" slider_wrapper relative w-full overflow-hidden ">
          <SlickSlider slides={sliderdata} />
        </div>
      </div>
    </section>
  </>
  );
};

export default Tabwithslider;

