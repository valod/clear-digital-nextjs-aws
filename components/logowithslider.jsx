'use client';
import React from 'react';
import Slider from 'react-slick';
import style from './styles/logowithslider.module.css';
import Image from 'next/image';

const logoImage = [
    {
        image: "/Cisco.png",
        alt: "Cisco"
    },
    {
        image: "/McAfee.png",
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
        image: "/Cisco.png",
        alt: "Cisco"
    },
    {
        image: "/McAfee.png",
        alt: "McAfee"
    },
];

// const SlickSlider = ({ slides }) => {
//     const settings = {
//       dots: true,
//       infinite: false,
//       speed: 100,
//       slidesToShow: 7,
//       slidesToScroll: 1,
//       centerMode: true,  // Enable center mode
//       centerPadding: '0', 
//       autoplay: true,
//     };

//     return (
//         <Slider {...settings}>
//             {slides.map((slide, index) => (
//                 <div key={index} className="logowrap relative mx-[50px] max-w-[210px] h-[84px]">
//                     <Image src={slide.image} alt={slide.alt} width={100} height={100} className='w-full h-full object-contain'/>
//                 </div>
//             ))}
//         </Slider>
//     );
// }

// const Logowithslider = () => {
//     return (
//         <section className='logowithslider bg-black'>
//             <div className="wrapper w-full relative flex flex-wrap overflow-hidden">
//                 <SlickSlider slides={logoImage} />
//             </div>
//         </section>
//     );
// };

// export default Logowithslider;

const Logowithslider = () => {
    return (
        <section className={`slider ${style.slider} no-padding bg-black`}>
            <div className= {`slidetrack ${style.slidetrack} relative`}>
            <div className= {`slide ${style.slide} flex laptop-landscape:mt-[30px] w-[fit-content`} >
                {logoImage.map((item, index) => (
                    <div className="logowrap w-[210px] h-[84px] mx-[25px]" key={index}>
                        <Image src={item.image} alt={item.alt} width={184} height={100}  className='w-full h-full object-contain'/>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}

export default Logowithslider;
















