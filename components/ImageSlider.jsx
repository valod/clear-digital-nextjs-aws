// import Image from "next/image"
// import Link from "next/link"
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const ImageSlider = () => {
//     const settings = {
//         dots: false,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         prevArrow: <CustomPrevArrow />,
//         nextArrow: <CustomNextArrow />,
//     };

//     const responsiveSettings = [
//         {
//             breakpoint: 767,
//             settings: {
//                 slidesToShow: 1,
//             },
//         },
//     ];
//     Object.assign(settings, { responsive: responsiveSettings });


//     return (
//         <section className='imageSlider no-padding'>
//             <div className='wrapper'>
//                 <Slider {...settings}>
//                     <div className='item blade-height relative'>
//                         <div className='blade-height'>
//                             <Image src={'/man-holding-phone.webp'} width={800} height={1090} className="w-full h-full object-cover" alt="" />
//                         </div>
//                         <div className="imageSlider__text absolute left-0 xl-up:px-[9.5rem] laptop:px-[5.5rem] tablet:px-[2.5rem] md:px-[2rem] xl-up:bottom-[15rem] bottom-[7rem]">
//                             <div className="logo h-[4rem] max-w-[19.5rem] w-full mt-[2rem] md-up:mt-[3rem] ">
//                                 <Image src={'/logo-digimarc.webp'} width={800} height={1090} className="w-full h-full object-contain blade-height" alt="" />
//                             </div>
//                             <h3 className="text-white leading-[1.1]">27% increase on click-through rates.</h3>
//                             <Link href={'/'} className="btn-default mt-[3rem]" target="_self">
//                                 View case study
//                             </Link>
//                         </div>
//                     </div>
//                     <div className='item blade-height relative'>
//                         <div className='blade-height'>
//                             <Image src={'/office-discussion.webp'} width={800} height={1090} className="w-full h-full object-cover blade-height" alt="" />
//                         </div>
//                         <div className="imageSlider__text absolute left-0 xl-up:px-[9.5rem] laptop:px-[5.5rem] tablet:px-[2.5rem] md:px-[2rem] xl-up:bottom-[15rem] bottom-[7rem]">
//                             <div className="logo h-[4rem] max-w-[19.5rem] w-full mt-[2rem] md-up:mt-[3rem] ">
//                                 <Image src={'/logo-leadspace.webp'} width={800} height={1090} className="w-full h-full object-contain" alt="" />
//                             </div>
//                             <h3 className="text-white leading-[1.1]">53% increase on engagement metrics.</h3>
//                             <Link href={'/'} className="btn-default mt-[3rem]" target="_self">
//                                 View case study
//                             </Link>
//                         </div>
//                     </div>
//                     <div className='item blade-height relative'>
//                         <div className='blade-height'>
//                             <video className="video-bg overlay w-full h-full object-cover blade-height" poster="https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/iStock-1280582431-1.webp" autoPlay loop muted >
//                                 <source src="https://media.istockphoto.com/id/1372283447/video/attractive-woman-wearing-virtual-reality-headset-augmented-reality-creative-lady-swiping.mp4?s=mp4-640x640-is&amp;k=20&amp;c=Flz0Jza76gPaFZyEJ8X6114fy__lJc1m_4_yKZRZsVo=" type="video/mp4"></source>
//                             </video>
//                         </div>
//                         <div className="imageSlider__text absolute left-0 xl-up:px-[9.5rem] laptop:px-[5.5rem] tablet:px-[2.5rem] md:px-[2rem] xl-up:bottom-[15rem] bottom-[7rem]">
//                             <div className="logo h-[4rem] max-w-[19.5rem] w-full mt-[2rem] md-up:mt-[3rem] ">
//                                 <Image src={'/logo-digimarc.webp'} width={800} height={1090} className="w-full h-full object-contain" alt="" />
//                             </div>
//                             <h3 className="text-white leading-[1.1]">27% increase on click-through rates.</h3>
//                             <Link href={'/'} className="btn-default mt-[3rem]" target="_self">
//                                 View case study
//                             </Link>
//                         </div>
//                     </div>
//                 </Slider>
//             </div>
//         </section>
//     )
// }

// const CustomPrevArrow = ({ onClick }) => (
//     <button className="btn__left group absolute top-0 left-0 h-full w-5 xl-up:w-24 laptop:w-12 tablet:w-[70px] z-10" onClick={onClick}>
//         <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className='opacity-0 group-hover:opacity-100 transition-all duration-200'>
//             <circle cx="39.9999" cy="40" r="36" transform="rotate(180 39.9999 40)" stroke="#FA198C" strokeWidth="8" />
//             <path d="M49.7083 40.5L29.2916 40.5" stroke="#FA198C" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
//             <path d="M39.4999 50.7084L29.2915 40.5L39.4999 30.2917" stroke="#FA198C" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//     </button>
// );

// const CustomNextArrow = ({ onClick }) => (
//     <button className="btn__right group absolute top-0 right-0 h-full w-5 xl-up:w-24 laptop:w-12 tablet:w-[70px] z-10" onClick={onClick}>
//         <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className='opacity-0 group-hover:opacity-100 transition-all duration-200 absolute right-0 top-50% translate-y-[-50%]'>
//             <circle cx="39.9966" cy="40" r="36" stroke="#FA198C" strokeWidth="8" />
//             <path d="M30.2883 39.5H50.7049" stroke="#FA198C" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
//             <path d="M40.4966 29.2917L50.7049 39.5L40.4966 49.7084" stroke="#FA198C" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//     </button>
// );

// export default ImageSlider