'use client';
import React from 'react';
import Slider from 'react-slick';
// import style from './styles/logowithslider.module.css';
import Image from 'next/image';

const logos = [
    {
        image: "/logos/cisco.svg",
        alt: "Cisco"
    },
    {
        image: "/logos/mcafee.svg",
        alt: "McAfee"
    },
    {
        image: "/Stanford.png",
        alt: "Stanford"
    },
    {
        image: "/Tenable.png",
        alt: "Tenable"
    },
    {
        image: "/VMware.png",
        alt: "VMware"
    },
    {
        image: "/logos/cisco.svg",
        alt: "Cisco"
    },
    {
        image: "/logos/mcafee.svg",
        alt: "McAfee"
    },
    {
        image: "/Stanford.png",
        alt: "Stanford"
    },
];

const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    swipeToSlide: false,
    centerMode: true,
    focusOnSelect: true,
};

const responsiveSettings = [
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 5,
        },
    },
    {
        breakpoint: 991,
        settings: {
            slidesToShow: 4,
        },
    },
    {
        breakpoint: 767,
        settings: {
            slidesToShow: 4,
        },
    },
    {
        breakpoint: 595,
        settings: {
            slidesToShow: 3,
        },
    },
    {
        breakpoint: 460,
        settings: {
            slidesToShow: 2,
        },
    },
];
Object.assign(settings, { responsive: responsiveSettings });

const LogoSlider = () => {
    return (
        <section className="logoSlider bg-black overflow-hidden no-padding-top">
            <div className="">
                <Slider {...settings}>
                    {logos.map((item, index) => {
                        return (
                            <div className="h-[8.4rem] max-w[19.3rem]" key={index}>
                                <Image src={item.image} alt={item.alt} width={162} height={100} className='w-full h-full object-contain' />
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </section>
    );
}

export default LogoSlider;
















