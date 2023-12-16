import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import React, { useState, useEffect } from 'react';

const QuoteCarousel = ({ imageSrc, heading, author, designation, url, linkText, count, denotation, subText, logo }) => {
    return (
        <div className='colTwoSlider__item'>
            <div className='colTwoSlider__item--inner flex justify-between gap-x-[6rem] lg:flex-wrap'>
                {imageSrc || count ? (
                    <div className='colTwoSlider__left w-full sm-up:grow-0 sm-up:shrink-0 sm-up:flex-[50%] sm-up:mx-auto sm-up:my-0'>
                        {imageSrc &&
                            <Image src={imageSrc} alt="" width={608} height={523} className='max-w-[60.8rem] w-full h-auto' />
                        }
                        {count &&
                            <div className='counter counter-arrow'>
                                <span className='h1 text-pink count'>{count}</span><span className='text-pink h1' >{denotation}</span>
                            </div>
                        }
                        {subText &&
                            <p className='mt-5 opacity-[0.8] leading-[1.5] font-light'>{subText}</p>
                        }
                    </div>
                ) : null}
                <div className='colTwoSlider__right lg:mt-[4rem]'>
                    {heading &&
                        <h3>{heading}</h3>
                    }
                    {author &&
                        <span className='block text-[16px] xl-up:text-[1.6rem] text-pink mt-[5rem]'><strong>{author}</strong> {designation}</span>
                    }
                    {logo &&
                        <div className='colTwoSlider__logo mt-[2.5rem]'>
                            <Image src={logo} alt="" width={166} height={24} />
                        </div>
                    }
                    {url &&
                        <div className='mt-[3.5rem]'>
                            <Link href={url} className="btn-default text-white" target="_self">
                                {linkText}
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

const ColTwoSlider = () => {
    const slides = [
        {
            imageSrc: '/hex.jpg',
            heading: 'Aenean aliquet malesuada quam et placerat. Suspendisse pellentesque. Interdum et malesuada fames ac ante ipsum primis in.',
            author: 'Jane Doe,',
            designation: 'CEO',
            url: '/',
            linkText: ' View case study'
        },
        {
            heading: 'Aenean aliquet malesuada quam et placerat. Suspendisse pellentesque. Interdum et malesuada fames ac ante ipsum primis in.',
            count: '113',
            denotation: '%',
            subText: 'Aenean aliquet malesuada quam et placerat.',
            logo: '/cohesity.svg',
            author: 'Jane Doe,',
            designation: 'CEO',
            url: '/',
            linkText: ' View case study'
        },
        {
            heading: 'Aenean aliquet malesuada quam et placerat. Suspendisse pellentesque. Interdum et malesuada fames ac ante ipsum primis in.',
            logo: '/cohesity.svg',
            author: 'Jane Doe,',
            designation: 'CEO',
            url: '/',
            linkText: ' View case study'
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
        afterChange: (index) => {
            setCurrentSlide(index);
        },
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    const progressBarWidth = `${((currentSlide + 1) / totalSlides) * 100}%`;

    return (
        <section className='colTwoSlider bg-black pb-0'>
            <div className='container'>
                <div className='wrapper'>
                    <Slider {...settings}>
                        {slides.map((slide, index) => (
                            <div key={index}>
                                <QuoteCarousel {...slide} />
                            </div>
                        ))}
                    </Slider>
                    <div className="progress-bar h-[0.8rem] mt-[5rem] md-up:mt-[8rem] bg-pink transition-all duration-300" style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}></div>
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
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className='opacity-0 group-hover:opacity-100 transition-all duration-200'>
            <circle cx="39.9966" cy="40" r="36" stroke="#FA198C" strokeWidth="8" />
            <path d="M30.2883 39.5H50.7049" stroke="#FA198C" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M40.4966 29.2917L50.7049 39.5L40.4966 49.7084" stroke="#FA198C" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </button>
);

export default ColTwoSlider


