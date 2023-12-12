import React from 'react';
import Styles from './styles/colTwoSlider.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ColTwoSlider() {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     arrows: true
    // };

    return (
        <section className={`${Styles.ColTwoSlider} relative bg-black p-0`}>
            {/* <Slider {...settings} className='w-full flex'> */}
            <div className="flex">
                <div className="slideWrap relative w-1/2 min-h-[1090px] py-40 px-28">
                    <div className="absolute w-full h-full z-0 top-0 left-0">
                        <Image className={`w-full h-full`} width={800} height={1090} src='/man-holding-phone.webp' alt="logo" />
                    </div>
                    <div className="w-full h-full relative flex flex-col justify-end mx-2.5">
                        <div className={`${Styles.logoWrap} w-full h-full mb-10`}>
                            <Image width={176} height={16} src='/logo-digimarc.webp' alt="digimarc_ogo" />
                        </div>
                        <h2 className='text-white max-w-[370px]'><span className='circle-around'>27%</span> increase on click-through rates.</h2>
                        <div className="btn-wrap mt-10">
                            <Link href='#' className='link-btn'>View case study</Link>
                        </div>
                    </div>
                </div>
                <div className="slideWrap relative w-1/2 min-h-[1090px] py-40 px-28">
                    <div className="absolute w-full h-full z-0 top-0 left-0">
                        <Image className={`w-full h-full`} width={220} height={500} src='/office-discussion.webp' alt="logo" />
                    </div>
                    <div className="w-full h-full relative flex flex-col justify-end mx-2.5">
                        <div className={`${Styles.logoWrap} w-full h-full mb-10`}>
                            <Image width={176} height={16} src='/logo-leadspace.webp' alt="digimarc_ogo" />
                        </div>
                        <h2 className='text-white max-w-[470px]'>53% <span className='zigzag more-wow'>increase</span> on engagement metrics.</h2>
                        <div className="btn-wrap mt-10">
                            <Link href='#' className='link-btn'>View case study</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* </Slider> */}

        </section>
    )
}

export default ColTwoSlider