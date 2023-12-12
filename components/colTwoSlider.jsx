import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ColTwoSlider = () => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        appendDots: (dots) => (
            <div>
                <ul className={`btnDots`}>{dots}</ul>
            </div>
        ),
        customPaging: function (i) {
            return (
                <button className={'slickDotButton'} />
            );
        },
    };

    Object.assign(settings);
    return (
        <section className='colTwoSlider bg-black height__full-nav'>
            <div className='container'>
                <div className='wrapper'>
                    <Slider {...settings}>
                        <div className='colTwoSlider__item'>
                            <div className='colTwoSlider__item--inner'>
                                <div className='colTwoSlider__left'>
                                    <Image src={"/hex.jpg"} alt="" width={608} height={523} />
                                </div>
                                <div className='colTwoSlider__right'>
                                    <h3>Aenean aliquet malesuada quam et placerat. Suspendisse pellentesque. Interdum et malesuada fames ac ante ipsum primis in.</h3>
                                    <span><strong>Jane Doe,</strong> CEO</span>
                                    <div className='colTwoSlider__logo'>
                                        <Image src={"/cohesity.svg"} alt="" width={166} height={24} />
                                    </div>
                                    <Link href={"/"} className="btn-default" target="_self">
                                        View case study
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='colTwoSlider__item'>
                            <div className='colTwoSlider__item--inner'>
                                <div className='colTwoSlider__left'>
                                    <div className='counter'>
                                        <span className='count'>113</span><span>%</span>
                                        <p>Aenean aliquet malesuada quam et placerat.</p>
                                    </div>
                                </div>
                                <div className='colTwoSlider__right'>
                                    <h3>Aenean aliquet malesuada quam et placerat. Suspendisse pellentesque. Interdum et malesuada fames ac ante ipsum primis in.</h3>
                                    <span><strong>Jane Doe,</strong> CEO</span>
                                    <div className='colTwoSlider__logo'>
                                        <Image src={"/cohesity.svg"} alt="" width={166} height={24} />
                                    </div>
                                    <Link href={"/"} className="btn-default" target="_self">
                                        View case study
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='colTwoSlider__item'>
                            <div className='colTwoSlider__item--inner'>
                                <div className='colTwoSlider__right'>
                                    <h3>Aenean aliquet malesuada quam et placerat. Suspendisse pellentesque. Interdum et malesuada fames ac ante ipsum primis in.</h3>
                                    <span><strong>Jane Doe,</strong> CEO</span>
                                    <div className='colTwoSlider__logo'>
                                        <Image src={"/cohesity.svg"} alt="" width={166} height={24} />
                                    </div>
                                    <Link href={"/"} className="btn-default" target="_self">
                                        View case study
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default ColTwoSlider
