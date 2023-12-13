"use client";
import React from "react";
import Slider from "react-slick";
import style from "./styles/halfslider.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

// slides.json
const sliderdata = [
  {
    bgimg: "/cardbg.png",
    cardcontent: "Google Analytics 4 is Coming. Is Your B2B Ready?",
    medium:
      "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
  },
  {
    bgimg: "/cardbg.png",
    cardcontent: "Google Analytics 4 is Coming. Is Your B2B Ready?",
    medium:
      "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
  },
  {
    bgimg: "/cardbg.png",
    cardcontent: "Google Analytics 4 is Coming. Is Your B2B Ready?",
    medium:
      "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
  },
];

const  logos = [
  { img: "/forbus.png" },
  { img: "/medium.png" },
  { img: "/ipsum.png" },
  { img: "/group.png" },
];

// ... (other imports)

const SlickSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: "110px 0 0",
  //   afterChange: (index) => {
  //     setCurrentSlide(index);
  // },
  // prevArrow: <CustomPrevArrow />,
  // nextArrow: <CustomNextArrow />,
  // },
  };
  // const progressBarWidth = `${((currentSlide + 1) / totalSlides) * 100}%`;


  return (
    <div className={`wrapper ${style.wrapper} w-full relative flex flex-wrap`}>
      {/* Adjust the content based on your needs */}
      <div className={`contentwrpper ${style.contentwrpper}`}>
        <h3 className={`contenttxt ${style.contenttxt}`}>
          Clear Digital news, thoughts, and insights.
        </h3>
        <p>
          Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc
          vulputate libero dolore aliqua et.
        </p>
        <div className={`btnwrap ${style.btnwrap}`}>
          {/* Fix the Link component */}
          <Link href="" className="pink-btn">
            View all Insights
          </Link>
        </div>
      </div>
      {/* Fix the closing tag of Slider component */}
      <div className={`slider ${style.slider}`}>
      <Slider {...settings}>
       
        {sliderdata.map((slide, index) => (
          <div
            className={`imgwrapper ${style.imgwrapper} relative`}
            key={index}
          >
            <div className={`imgwrap ${style.imgwrap} relative`}>
              <div className={`bgimg ${style.bgimg} relative`}>
                <Image
                  src={slide.bgimg}
                  alt=""
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`ctwrapper ${style.ctwrapper}`}>
                <h5 className={`cardcontent ${style.cardcontent}`}>
                  {slide.cardcontent}
                </h5>
                <p className={`medium ${style.medium}`}>{slide.medium}</p>
                <Link href={"/"} className="btn-default" target="_self">
                  View case study
                </Link>
              </div>
            </div>
          </div>
        ))}
       
      </Slider>
      </div>
    </div>
  );
};

const Halfslider = () => {
  useEffect(() => {
    const section = document.getElementsByClassName("halfslider")[0];
    const slide = section.getElementsByClassName("slick-slider")[0];
    const slickSlides = section.getElementsByClassName('slick-slide');

    // Loop through each slick slide and add the desired class
    for (let i = 0; i < slickSlides.length; i++) {
      slickSlides[i].classList.add(`${style.slickslide}`);
    }

    // The rest of your code...
    // const prev = section.getElementsByClassName("slick-prev")[0];
    // const next = section.getElementsByClassName("slick-next")[0];
    // prev.classList.add(`${style.prevArrow}`);
    // next.classList.add(`${style.nextArrow}`);
    slide.classList.add(`${style.slide}`);
    console.log(slickSlides);
  }, []);


  return (
    <section className={`halfslider ${style.halfslider} py-40`}>
      <div className="container">
        <div className="slider_wrapper relative w-full">
          <SlickSlider slides={sliderdata} />
        </div>

        <div className={`logowrapper ${style.logowrapper} w-full relative flex flex-wrap justify-between`}>
          <div className="headingwrap relative w-[25%]">
            <h3>Featured in:</h3>
          </div>

          <div className="logowrapper relative flex flex-wrap w-[65%]">
            {logos.map((logo, index) => (
              <div className="imgwrapcase max-w-[153px] max-h-[46px] w-full h-full" key={index}>
                <Image
                  src={logo.img}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Halfslider;