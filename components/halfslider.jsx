// // Install the required packages
// // npm install react-owl-carousel2

// // Import necessary modules from the react-owl-carousel2 package
// import React, { useEffect } from "react";
// import OwlCarousel from "react-owl-carousel2";
// import "react-owl-carousel2/style.css";
// import style from "./styles/halfslider.module.css";
// import Image from "next/image";
// import Link from "next/link";

// // slides.json
// const sliderdata = [
//   {
//     bgimg: "/cardbg.png",
//     cardcontent: "Google Analytics 4 is Coming. Is Your B2B Ready?",
//     medium:
//       "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
//   },
//   {
//     bgimg: "/cardbg.png",
//     cardcontent: "Google Analytics 4 is Coming. Is Your B2B Ready?",
//     medium:
//       "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
//   },
//   {
//     bgimg: "/cardbg.png",
//     cardcontent: "Google Analytics 4 is Coming. Is Your B2B Ready?",
//     medium:
//       "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
//   },
// ];

// const logos = [
//   { img: "/forbus.png" },
//   { img: "/medium.png" },
//   { img: "/ipsum.png" },
//   { img: "/group.png" },
// ];

// 
//   const options = {
//     items: 1,
//     loop: true,
//     margin: 10,
//     dots: true,
//     center: true,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       600: {
//         items: 1,
//       },
//       1000: {
//         items: 1,
//       },
//     },
//   

//   return (
//     <div className={`wrapper ${style.wrapper} w-full relative flex flex-wrap`}>
//       {/* Adjust the content based on your needs */}
//       <div className={`contentwrpper ${style.contentwrpper}`}>
//         <h3 className={`contenttxt ${style.contenttxt}`}>
//           Clear Digital news, thoughts, and insights.
//         </h3>
//         <p>
//           Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc
//           vulputate libero dolore aliqua et.
//         </p>
//         <div className={`btnwrap ${style.btnwrap}`}>
//           {/* Fix the Link component */}
//           <Link href="" className="pink-btn">
//             View all Insights
//           </Link>
//         </div>
//       </div>

//       {/* Fix the closing tag of OwlCarousel component */}
//       <OwlCarousel options={options} className={`slider ${style.slider}`}>
//         {slides.map((slide, index) => (
//           <div
//             className={`imgwrapper ${style.imgwrapper} relative`}
//             key={index}
//           >
//             <div className={`imgwrap ${style.imgwrap} relative`}>
//               <div className={`bgimg ${style.bgimg} relative`}>
//                 <Image
//                   src={slide.bgimg}
//                   alt=""
//                   width={400}
//                   height={400}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className={`ctwrapper ${style.ctwrapper}`}>
//                 <h5 className={`cardcontent ${style.cardcontent}`}>
//                   {slide.cardcontent}
//                 </h5>
//                 <p className={`medium ${style.medium}`}>{slide.medium}</p>
//                 <Link href={"/"} className="btn-default" target="_self">
//                   View case study
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </OwlCarousel>
//     </div>
//   );
// };

// const Halfslider = () => {
//   useEffect(() => {
//     // Your useEffect logic remains unchanged
//   }, []);

//   return (
//     <section className={`halfslider ${style.halfslider} py-40`}>
//       <div className="container">
//         <div className="slider_wrapper relative w-full">
//           <SlickSlider slides={sliderdata} />
//         </div>

//         <div className={`logowrapper ${style.logowrapper} w-full relative flex flex-wrap justify-between`}>
//           <div className="headingwrap relative w-[25%]">
//             <h3>Featured in:</h3>
//           </div>

//           <div className="logowrapper relative flex flex-wrap w-[65%]">
//             {logos.map((logo, index) => (
//               <div className="imgwrapcase max-w-[153px] max-h-[46px] w-full h-full" key={index}>
//                 <Image
//                   src={logo.img}
//                   width={100}
//                   height={100}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Halfslider;
