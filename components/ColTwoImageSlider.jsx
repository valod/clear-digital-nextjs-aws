import Image from "next/image"
import Link from "next/link"
import Slider from 'react-slick';
import React, { useState, useEffect } from 'react';
import style from '../components/styles/colTwoImageSlider.module.css'

const ImageTextCarousel = ({ imageSrc, heading, subText, url, linkText }) => {
    return (
        <div className="card relative flex items-end 30.9rem xl-up:min-h-[54rem] laptop:min-h-[36rem] tablet:min-h-[49.3rem] phablet:min-h-[49.3rem] md-up:mr-[3rem]">
            <div className="bg-img">
                <Image src={imageSrc} width={692} height={551} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="colTwoImageSlider__text p-[5rem]">
                <h5 className="text-white">{heading}</h5>
                <p className="medium text-white mt-[3rem] mb-[2rem]">{subText}</p>
                <Link href={url} className="btn-default text-white">{linkText}</Link>
            </div>
        </div>
    );
}

const ColTwoImageSlider = () => {
    const logos = [
        { img: "/forbus.png" },
        { img: "/medium.png" },
        { img: "/ipsum.png" },
        { img: "/group.png" },
    ];

    const slides = [
        {
            imageSrc: '/red_circle.png',
            heading: 'Google Analytics 4 is Coming. Is Your B2B Ready?',
            subText: 'Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.',
            url: '/',
            linkText: 'Read More'
        },
        {
            imageSrc: '/blue-pattern.jpg',
            heading: 'Google Analytics 4 is Coming. Is Your B2B Ready??',
            subText: 'Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.',
            url: '/',
            linkText: 'Read More'
        },
        {
            imageSrc: '/red_circle.png',
            heading: 'Google Analytics 4 is Coming. Is Your B2B Ready???',
            subText: 'Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.',
            url: '/',
            linkText: 'Read More'
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = slides.length;

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        afterChange: (index) => {
            setCurrentSlide(index);
        },
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    const responsiveSettings = [
        {
            breakpoint: 767,
            settings: {
                centerMode: false,
            },
        },
    ];
    Object.assign(settings, { responsive: responsiveSettings });
    const progressBarWidth = `${((currentSlide + 1) / totalSlides) * 100}%`;

    return (
        <section className='colTwoImageSlider bg-gray'>
            <div className='container'>
                <div className='wrapper flex items-center justify-between lg:flex-wrap'>
                    <div className='colTwoImageSlider__left pr-[130px] lg:pr-0 lg-up:min-w-[50%]'>
                        <h3>Clear Digital news, thoughts, and <span className="underline-text text-pink">insights</span></h3>
                        <p className="mt-[2rem]">Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.</p>
                        <div className="mt-[3.5rem]">
                            <Link href={'/'} className="pink-btn lg:text-center">View all Insights</Link>
                        </div>
                    </div>
                    <div className='colTwoImageSlider__right lg-up:min-w-[50%] lg:w-full lg:mt-[4rem]'>
                        <div className="custom-wrapper overflow-hidden relative">
                            <Slider {...settings}>
                                {slides.map((slide, index) => (
                                    <div key={index}>
                                        <ImageTextCarousel {...slide} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className="md-up:mr-[3.4rem] mt-[4rem] md-up:mt-[5rem]">
                            <div className="progress-bar h-[0.8rem] bg-pink transition-all duration-300" style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}></div>
                        </div>
                    </div>
                </div>
                <div className={`logowrapper w-full  mt-[125px] relative flex flex-wrap justify-between`}>
                    <div className={`w-[25%] xl:w-[100%]`}>
                        <h3 className={`relative inline ${style.star_logo}`}>Featured in:</h3>
                    </div>

                    <div className="logowrapper justify-between relative flex flex-wrap w-[65%] xl:w-full xl:mt-[60px] md:justify-around">
                        {logos.map((logo, index) => (
                            <div className="imgwrapcase max-w-[153px] max-h-[46px] w-full h-full tablet:px-[20px] md:px-[20px] md:mb-[30px]" key={index}>
                                <Image
                                    src={logo.img}
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-contain"
                                    alt="img"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const CustomPrevArrow = ({ onClick }) => (
    <button className="btn__left group absolute top-0 left-0 h-full w-5 xl-up:w-24 laptop:w-12 tablet:w-[70px] z-10" onClick={onClick}>
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className='opacity-0 group-hover:opacity-100 transition-all duration-200'>
            <circle cx="39.9999" cy="40" r="36" transform="rotate(180 39.9999 40)" stroke="#FA198C" strokeWidth="8" />
            <path d="M49.7083 40.5L29.2916 40.5" stroke="#FA198C" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M39.4999 50.7084L29.2915 40.5L39.4999 30.2917" stroke="#FA198C" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button className="btn__right group absolute top-0 right-0 h-full w-5 xl-up:w-24 laptop:w-12 tablet:w-[70px] z-10" onClick={onClick}>
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className='opacity-0 group-hover:opacity-100 transition-all duration-200 absolute right-0 top-50% translate-y-[-50%]'>
            <circle cx="39.9966" cy="40" r="36" stroke="#FA198C" strokeWidth="8" />
            <path d="M30.2883 39.5H50.7049" stroke="#FA198C" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M40.4966 29.2917L50.7049 39.5L40.4966 49.7084" stroke="#FA198C" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </button>
);

export default ColTwoImageSlider
